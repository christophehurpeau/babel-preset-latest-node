'use strict';

const validTargetOption = [
  '10',
  '10.13',
  '12',
  '12.10',
  '14',
  '14.8',
  'current',
];

const checkTargetOption = (targetOption) => {
  if (targetOption && !validTargetOption.includes(targetOption)) {
    throw new Error(
      `Preset latest-node 'target' option must one of ${validTargetOption.join(
        ', ',
      )}.`,
    );
  }
};

const checkDeprecatedOptions = (opts) => {
  if (opts.esnext !== undefined) {
    throw new Error(
      'Preset latest-node you should replace esnext by shippedProposals.',
    );
  }
};

const checkBooleanOptions = (opts) => {
  ['loose', 'es2019', 'shippedProposals'].forEach((optionName) => {
    if (
      opts[optionName] !== undefined &&
      typeof opts[optionName] !== 'boolean'
    ) {
      throw new Error(
        `Preset latest-node '${optionName}' option must be a boolean.`,
      );
    }
  });
};

const checkModulesValue = (modules) => {
  if (modules !== false && modules !== 'commonjs') {
    throw new Error(
      "Preset latest-node 'modules' option must be 'false' to indicate no modules\n" +
        "or 'commonjs' (default)",
    );
  }
};
module.exports = function (context, opts = {}) {
  checkBooleanOptions(opts);
  checkDeprecatedOptions(opts);

  const targetOption = !opts.target ? undefined : String(opts.target);
  checkTargetOption(targetOption);

  const target =
    targetOption && targetOption !== 'current'
      ? targetOption
      : process.versions.node;
  const splittedTarget = target.split('.');

  const major = Number(splittedTarget[0]);
  const minor = Number(splittedTarget[1]) || 0;

  const loose = opts.loose !== undefined ? opts.loose : false;
  const modules = opts.modules !== undefined ? opts.modules : 'commonjs';
  const es2019 = opts.es2019 !== undefined ? opts.es2019 : true;
  const es2020 = opts.es2020 !== undefined ? opts.es2020 : true;
  const shippedProposals =
    opts.shippedProposals !== undefined ? opts.shippedProposals : true;

  checkModulesValue(modules);

  const optsLoose = { loose };
  const infNode10dot13 = major < 10 || (major === 10 && minor < 13);
  const infNode14 = major < 14;
  const supOrEqNode14dot8 = major > 15 || (major === 14 && minor >= 8);

  return {
    plugins: [
      /* es2015 */
      modules === 'commonjs' && [
        require('@babel/plugin-transform-modules-commonjs'),
        optsLoose,
      ],

      /* es2019 */
      es2019 && infNode10dot13
        ? require('@babel/plugin-proposal-optional-catch-binding')
        : undefined,

      /* es2020 */
      es2020 &&
        infNode14 &&
        require('@babel/plugin-proposal-nullish-coalescing-operator').default,
      es2020 &&
        infNode14 &&
        require('@babel/plugin-proposal-optional-chaining').default,

      /* shippedProposals */
      shippedProposals &&
        infNode14 &&
        require('@babel/plugin-proposal-numeric-separator').default,
      shippedProposals &&
        supOrEqNode14dot8 &&
        require('@babel/plugin-syntax-top-level-await').default,
    ].filter(Boolean),
  };
};

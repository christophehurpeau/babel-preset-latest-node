/* eslint-disable strict, global-require */

'use strict';

const validTargetOption = [6, 6.5, 7, 7.6, 'current'];

module.exports = function (context, opts) {
  // `|| {}` to support node 4
  opts = opts || {};
  // use indexOf to support node 4
  if (opts.target && validTargetOption.indexOf(opts.target) === -1) {
    throw new Error(`Preset latest-node 'target' option must one of ${validTargetOption.join(', ')}.`);
  }

  const target = opts.target !== 'current' ? Number(opts.target) : parseFloat(process.versions.node);

  const loose = opts.loose !== undefined ? opts.loose : false;
  const modules = opts.modules !== undefined ? opts.modules : 'commonjs';
  const es2016 = opts.es2016 !== undefined ? opts.es2016 : true;
  const es2017 = opts.es2017 !== undefined ? opts.es2017 : true;

  if (modules !== false && modules !== 'commonjs') {
    throw new Error("Preset es2015 'modules' option must be 'false' to indicate no modules\n" +
      "or 'commonjs' (default)");
  }
  if (typeof loose !== 'boolean') throw new Error("Preset modern-browsers 'loose' option must be a boolean.");

  const optsLoose = { loose };

  return {
    plugins: [
      /* es2015 */
      require('babel-plugin-check-es2015-constants'),

      modules === 'commonjs' && [require('babel-plugin-transform-es2015-modules-commonjs'), optsLoose],

      target < 6.5 && require('babel-plugin-transform-es2015-arrow-functions'), // needed for function-name
      target < 6.5 && require('babel-plugin-transform-es2015-function-name'),

      /* es2016 */
      es2016 && target < 7 && require('babel-plugin-transform-exponentiation-operator'),

      /* es2017 */
      es2017 && require('babel-plugin-syntax-trailing-function-commas'),
      es2017 && target < 7.6 && require('babel-plugin-transform-async-to-generator'),
    ].filter(Boolean),
  };
};

/* eslint-disable max-lines */

'use strict';

jest.mock(
  '@babel/plugin-transform-modules-commonjs',
  () => '@babel/plugin-transform-modules-commonjs'
);
jest.mock(
  '@babel/plugin-syntax-optional-catch-binding',
  () => '@babel/plugin-syntax-optional-catch-binding'
);
jest.mock(
  '@babel/plugin-proposal-optional-catch-binding',
  () => '@babel/plugin-proposal-optional-catch-binding'
);
jest.mock(
  '@babel/plugin-syntax-json-strings',
  () => '@babel/plugin-syntax-json-strings'
);
jest.mock('@babel/plugin-proposal-nullish-coalescing-operator', () => ({
  default: '@babel/plugin-proposal-nullish-coalescing-operator',
}));
jest.mock('@babel/plugin-proposal-optional-chaining', () => ({
  default: '@babel/plugin-proposal-optional-chaining',
}));

const plugins = {};

plugins.modulesCommonjs = require('@babel/plugin-transform-modules-commonjs');
plugins.optionalCatchBindingSyntax = require('@babel/plugin-syntax-optional-catch-binding');
plugins.optionalCatchBindingProposal = require('@babel/plugin-proposal-optional-catch-binding');
plugins.jsonStringsSyntax = require('@babel/plugin-syntax-json-strings');
plugins.proposalNullishCoalescingOperator = require('@babel/plugin-proposal-nullish-coalescing-operator').default;
plugins.proposalOptionalChaining = require('@babel/plugin-proposal-optional-chaining').default;

const preset = require('.');

describe('options', () => {
  describe('target', () => {
    test('6.1 is not a valid target', () => {
      expect(() => preset(null, { target: '6.1' })).toThrow(
        "Preset latest-node 'target' option must one of 10, 10.13, 11, 12, 13, current."
      );
    });

    [
      '10',
      '10.13',
      '11',
      '12',
      '13',
      10,
      10.13,
      11,
      12,
      13,
      'current',
      undefined,
      null,
      '',
    ].forEach((target) => {
      test(`${target} ${typeof target} is a valid target`, () => {
        expect(preset(null, { target })).toBeDefined();
      });
    });
  });

  describe('modules', () => {
    test('xx is not a valid modules option', () => {
      expect(() => preset(null, { target: 'current', modules: 'xx' })).toThrow(
        "Preset latest-node 'modules' option must be 'false' to indicate no modules\nor 'commonjs' (default)"
      );
    });

    ['commonjs', false].forEach((option) => {
      test(`${option} is a valid modules option`, () => {
        expect(
          preset(null, { target: 'current', modules: option })
        ).toBeDefined();
      });
    });
  });

  describe('loose', () => {
    test('xx is not a valid loose option', () => {
      expect(() => preset(null, { target: 'current', loose: 'xx' })).toThrow(
        "Preset latest-node 'loose' option must be a boolean."
      );
    });

    [true, false].forEach((option) => {
      test(`${option} is a valid loose option`, () => {
        expect(
          preset(null, { target: 'current', loose: option })
        ).toBeDefined();
      });
    });
  });

  describe('es2019', () => {
    test('xx is not a valid es2019 option', () => {
      expect(() => preset(null, { target: 'current', es2019: 'xx' })).toThrow(
        "Preset latest-node 'es2019' option must be a boolean."
      );
    });

    [true, false].forEach((option) => {
      test(`${option} is a valid es2019 option`, () => {
        expect(
          preset(null, { target: 'current', es2019: option })
        ).toBeDefined();
      });
    });
  });

  describe('shippedProposals', () => {
    test('xx is not a valid shippedProposals option', () => {
      expect(() =>
        preset(null, { target: 'current', shippedProposals: 'xx' })
      ).toThrow(
        "Preset latest-node 'shippedProposals' option must be a boolean."
      );
    });

    [true, false].forEach((option) => {
      test(`${option} is a valid shippedProposals option`, () => {
        expect(
          preset(null, { target: 'current', shippedProposals: option })
        ).toBeDefined();
      });
    });
  });
});

describe('plugins', () => {
  describe('10', () => {
    test('default options', () => {
      expect(preset(null, { target: '10' })).toEqual({
        plugins: [
          [plugins.modulesCommonjs, { loose: false }],
          plugins.optionalCatchBindingProposal,
          plugins.jsonStringsSyntax,
          plugins.proposalNullishCoalescingOperator,
          plugins.proposalOptionalChaining,
        ],
      });
    });

    test('{ shippedProposals: false }', () => {
      expect(preset(null, { target: '10', shippedProposals: false })).toEqual({
        plugins: [
          [plugins.modulesCommonjs, { loose: false }],
          plugins.optionalCatchBindingProposal,
        ],
      });
    });
  });

  describe('10.13', () => {
    test('default options', () => {
      expect(preset(null, { target: '10.13' })).toEqual({
        plugins: [
          [plugins.modulesCommonjs, { loose: false }],
          plugins.optionalCatchBindingSyntax,
          plugins.jsonStringsSyntax,
          plugins.proposalNullishCoalescingOperator,
          plugins.proposalOptionalChaining,
        ],
      });
    });

    test('{ shippedProposals: false }', () => {
      expect(
        preset(null, { target: '10.13', shippedProposals: false })
      ).toEqual({
        plugins: [
          [plugins.modulesCommonjs, { loose: false }],
          plugins.optionalCatchBindingSyntax,
        ],
      });
    });
  });

  describe('11', () => {
    test('default options', () => {
      expect(preset(null, { target: '11' })).toEqual({
        plugins: [
          [plugins.modulesCommonjs, { loose: false }],
          plugins.optionalCatchBindingSyntax,
          plugins.jsonStringsSyntax,
          plugins.proposalNullishCoalescingOperator,
          plugins.proposalOptionalChaining,
        ],
      });
    });

    test('{ shippedProposals: false }', () => {
      expect(preset(null, { target: '11', shippedProposals: false })).toEqual({
        plugins: [
          [plugins.modulesCommonjs, { loose: false }],
          plugins.optionalCatchBindingSyntax,
        ],
      });
    });
  });

  describe('12', () => {
    test('default options', () => {
      expect(preset(null, { target: '12' })).toEqual({
        plugins: [
          [plugins.modulesCommonjs, { loose: false }],
          plugins.optionalCatchBindingSyntax,
          plugins.jsonStringsSyntax,
          plugins.proposalNullishCoalescingOperator,
          plugins.proposalOptionalChaining,
        ],
      });
    });

    test('{ es2019: false }', () => {
      expect(
        preset(null, { target: '12', es2019: false, shippedProposals: false })
      ).toEqual({
        plugins: [[plugins.modulesCommonjs, { loose: false }]],
      });
    });
    test('{ shippedProposals: false }', () => {
      expect(preset(null, { target: '12', shippedProposals: false })).toEqual({
        plugins: [
          [plugins.modulesCommonjs, { loose: false }],
          plugins.optionalCatchBindingSyntax,
        ],
      });
    });
  });
});

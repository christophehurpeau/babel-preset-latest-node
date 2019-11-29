/* eslint-disable prettier/prettier, max-lines */

'use strict';

jest.mock('@babel/plugin-transform-modules-commonjs', () => '@babel/plugin-transform-modules-commonjs');
jest.mock('@babel/plugin-transform-arrow-functions', () => '@babel/plugin-transform-arrow-functions');
jest.mock('@babel/plugin-transform-function-name', () => '@babel/plugin-transform-function-name');
jest.mock('@babel/plugin-transform-exponentiation-operator', () => '@babel/plugin-transform-exponentiation-operator');
jest.mock('@babel/plugin-transform-async-to-generator', () => '@babel/plugin-transform-async-to-generator');
jest.mock('@babel/plugin-proposal-object-rest-spread', () => '@babel/plugin-proposal-object-rest-spread');
jest.mock('@babel/plugin-syntax-object-rest-spread', () => '@babel/plugin-syntax-object-rest-spread');
jest.mock('@babel/plugin-proposal-unicode-property-regex', () => '@babel/plugin-proposal-unicode-property-regex');
jest.mock('@babel/plugin-proposal-async-generator-functions', () => '@babel/plugin-proposal-async-generator-functions');
jest.mock('@babel/plugin-syntax-async-generators', () => '@babel/plugin-syntax-async-generators');
jest.mock('@babel/plugin-syntax-optional-catch-binding', () => '@babel/plugin-syntax-optional-catch-binding');
jest.mock('@babel/plugin-proposal-optional-catch-binding', () => '@babel/plugin-proposal-optional-catch-binding');
jest.mock('@babel/plugin-syntax-json-strings', () => '@babel/plugin-syntax-json-strings');
jest.mock('@babel/plugin-proposal-json-strings', () => '@babel/plugin-proposal-json-strings');


const pluginModulesCommonjs = require('@babel/plugin-transform-modules-commonjs');
const pluginArrowFunctions = require('@babel/plugin-transform-arrow-functions');
const pluginFunctionName = require('@babel/plugin-transform-function-name');
const pluginExponentiationOperator = require('@babel/plugin-transform-exponentiation-operator');
const pluginAsync = require('@babel/plugin-transform-async-to-generator');
const pluginObjectRestSpread = require('@babel/plugin-proposal-object-rest-spread');
const pluginObjectRestSpreadSyntax = require('@babel/plugin-syntax-object-rest-spread');
const pluginUnicodePropertyRegex = require('@babel/plugin-proposal-unicode-property-regex');
const pluginAsyncGenerator = require('@babel/plugin-proposal-async-generator-functions');
const pluginAsyncGeneratorSyntax = require('@babel/plugin-syntax-async-generators');
const pluginOptionalCatchBindingSyntax = require('@babel/plugin-syntax-optional-catch-binding');
const pluginOptionalCatchBindingProposal = require('@babel/plugin-proposal-optional-catch-binding');
const pluginJsonStringsSyntax = require('@babel/plugin-syntax-json-strings');
const pluginJsonStringsProposal = require('@babel/plugin-proposal-json-strings');
const preset = require('.');

describe('options', () => {
  describe('target', () => {
    test('6.1 is not a valid target', () => {
      expect(() => preset(null, { target: '6.1' })).toThrow(
        "Preset latest-node 'target' option must one of 6, 6.5, 8, 8.3, 10, 10.13, 11, 12, 13, current."
      );
    });

    ['6', '6.5', '8', '8.3', '10', '10.13', '11', '12', 6, 6.5, 8, 8.3, 10, 10.13, 11, 12, 'current', undefined, null, ''].forEach(target => {
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

    ['commonjs', false].forEach(option => {
      test(`${option} is a valid modules option`, () => {
        expect(preset(null, { target: 'current', modules: option })).toBeDefined();
      });
    });
  });

  describe('loose', () => {
    test('xx is not a valid loose option', () => {
      expect(() => preset(null, { target: 'current', loose: 'xx' })).toThrow(
        "Preset latest-node 'loose' option must be a boolean."
      );
    });

    [true, false].forEach(option => {
      test(`${option} is a valid loose option`, () => {
        expect(preset(null, { target: 'current', loose: option })).toBeDefined();
      });
    });
  });

  describe('es2019', () => {
    test('xx is not a valid es2019 option', () => {
      expect(() => preset(null, { target: 'current', es2019: 'xx' })).toThrow(
        "Preset latest-node 'es2019' option must be a boolean."
      );
    });

    [true, false].forEach(option => {
      test(`${option} is a valid es2019 option`, () => {
        expect(preset(null, { target: 'current', es2019: option })).toBeDefined();
      });
    });
  });

  describe('shippedProposals', () => {
    test('xx is not a valid shippedProposals option', () => {
      expect(() => preset(null, { target: 'current', shippedProposals: 'xx' })).toThrow(
        "Preset latest-node 'shippedProposals' option must be a boolean."
      );
    });

    [true, false].forEach(option => {
      test(`${option} is a valid shippedProposals option`, () => {
        expect(preset(null, { target: 'current', shippedProposals: option })).toBeDefined();
      });
    });
  });
});

describe('plugins', () => {
  test('6', () => {
    expect(preset(null, { target: '6' })).toEqual({
      plugins: [
        [pluginModulesCommonjs, { loose: false }],
        pluginArrowFunctions,
        pluginFunctionName,
        pluginExponentiationOperator,
        pluginAsync,
        [pluginObjectRestSpread, { loose: false, useBuiltIns: true }],
        [pluginUnicodePropertyRegex, { useUnicodeFlag: true }],
        pluginAsyncGenerator,
        pluginOptionalCatchBindingProposal,
        pluginJsonStringsProposal,
      ],
    });
  });

  test('6 loose: false', () => {
    expect(preset(null, { target: '6', loose: false })).toEqual({
      plugins: [
        [pluginModulesCommonjs, { loose: false }],
        pluginArrowFunctions,
        pluginFunctionName,
        pluginExponentiationOperator,
        pluginAsync,
        [pluginObjectRestSpread, { loose: false, useBuiltIns: true }],
        [pluginUnicodePropertyRegex, { useUnicodeFlag: true }],
        pluginAsyncGenerator,
        pluginOptionalCatchBindingProposal,
        pluginJsonStringsProposal,
      ],
    });
  });

  test('6 loose: true', () => {
    expect(preset(null, { target: '6', loose: true })).toEqual({
      plugins: [
        [pluginModulesCommonjs, { loose: true }],
        pluginArrowFunctions,
        pluginFunctionName,
        pluginExponentiationOperator,
        pluginAsync,
        [pluginObjectRestSpread, { loose: true, useBuiltIns: true }],
        [pluginUnicodePropertyRegex, { useUnicodeFlag: true }],
        pluginAsyncGenerator,
        pluginOptionalCatchBindingProposal,
        pluginJsonStringsProposal,
      ],
    });
  });

  test('6 modules: false', () => {
    expect(preset(null, { target: '6', modules: false })).toEqual({
      plugins: [
        pluginArrowFunctions,
        pluginFunctionName,
        pluginExponentiationOperator,
        pluginAsync,
        [pluginObjectRestSpread, { loose: false, useBuiltIns: true }],
        [pluginUnicodePropertyRegex, { useUnicodeFlag: true }],
        pluginAsyncGenerator,
        pluginOptionalCatchBindingProposal,
        pluginJsonStringsProposal,
      ],
    });
  });

  test('6 es2018: false, shippedProposals: false', () => {
    expect(preset(null, { target: '6', es2018: false, shippedProposals: false })).toEqual({
      plugins: [
        [pluginModulesCommonjs, { loose: false }],
        pluginArrowFunctions,
        pluginFunctionName,
        pluginExponentiationOperator,
        pluginAsync,
        pluginOptionalCatchBindingProposal,
      ],
    });
  });

  test('6.5', () => {
    expect(preset(null, { target: '6.5' })).toEqual({
      plugins: [
        [pluginModulesCommonjs, { loose: false }],
        pluginExponentiationOperator,
        pluginAsync,
        [pluginObjectRestSpread, { loose: false, useBuiltIns: true }],
        [pluginUnicodePropertyRegex, { useUnicodeFlag: true }],
        pluginAsyncGenerator,
        pluginOptionalCatchBindingProposal,
        pluginJsonStringsProposal,
      ],
    });
  });

  test('8', () => {
    expect(preset(null, { target: '8' })).toEqual({
      plugins: [
        [pluginModulesCommonjs, { loose: false }],
        [pluginObjectRestSpread, { loose: false, useBuiltIns: true }],
        [pluginUnicodePropertyRegex, { useUnicodeFlag: true }],
        pluginAsyncGenerator,
        pluginOptionalCatchBindingProposal,
        pluginJsonStringsProposal,
      ],
    });
  });

  describe('8.3', () => {
    test('default options', () => {
      expect(preset(null, { target: '8.3' })).toEqual({
        plugins: [
          [pluginModulesCommonjs, { loose: false }],
          pluginObjectRestSpreadSyntax,
          [pluginUnicodePropertyRegex, { useUnicodeFlag: true }],
          pluginAsyncGenerator,
          pluginOptionalCatchBindingProposal,
          pluginJsonStringsProposal,
        ],
      });
    });

    test('{ shippedProposals: false }', () => {
      expect(preset(null, { target: '8.3', shippedProposals: false })).toEqual({
        plugins: [
          [pluginModulesCommonjs, { loose: false }],
          pluginObjectRestSpreadSyntax,
          [pluginUnicodePropertyRegex, { useUnicodeFlag: true }],
          pluginAsyncGenerator,
          pluginOptionalCatchBindingProposal,
        ],
      });
    });
  });

  describe('10', () => {
    test('default options', () => {
      expect(preset(null, { target: '10' })).toEqual({
        plugins: [
          [pluginModulesCommonjs, { loose: false }],
          pluginObjectRestSpreadSyntax,
          pluginAsyncGeneratorSyntax,
          pluginOptionalCatchBindingProposal,
          pluginJsonStringsSyntax,
        ],
      });
    });

    test('{ shippedProposals: false }', () => {
      expect(preset(null, { target: '10', shippedProposals: false })).toEqual({
        plugins: [
          [pluginModulesCommonjs, { loose: false }],
          pluginObjectRestSpreadSyntax,
          pluginAsyncGeneratorSyntax,
          pluginOptionalCatchBindingProposal,
        ],
      });
    });
  });

  describe('10.13', () => {
    test('default options', () => {
      expect(preset(null, { target: '10.13' })).toEqual({
        plugins: [
          [pluginModulesCommonjs, { loose: false }],
          pluginObjectRestSpreadSyntax,
          pluginAsyncGeneratorSyntax,
          pluginOptionalCatchBindingSyntax,
          pluginJsonStringsSyntax,
        ],
      });
    });

    test('{ shippedProposals: false }', () => {
      expect(preset(null, { target: '10.13', shippedProposals: false })).toEqual({
        plugins: [
          [pluginModulesCommonjs, { loose: false }],
          pluginObjectRestSpreadSyntax,
          pluginAsyncGeneratorSyntax,
          pluginOptionalCatchBindingSyntax,
        ],
      });
    });
  });

  describe('11', () => {
    test('default options', () => {
      expect(preset(null, { target: '11' })).toEqual({
        plugins: [
          [pluginModulesCommonjs, { loose: false }],
          pluginObjectRestSpreadSyntax,
          pluginAsyncGeneratorSyntax,
          pluginOptionalCatchBindingSyntax,
          pluginJsonStringsSyntax,
        ],
      });
    });

    test('{ shippedProposals: false }', () => {
      expect(preset(null, { target: '11', shippedProposals: false })).toEqual({
        plugins: [
          [pluginModulesCommonjs, { loose: false }],
          pluginObjectRestSpreadSyntax,
          pluginAsyncGeneratorSyntax,
          pluginOptionalCatchBindingSyntax,
        ],
      });
    });
  });

  describe('12', () => {
    test('default options', () => {
      expect(preset(null, { target: '12' })).toEqual({
        plugins: [
          [pluginModulesCommonjs, { loose: false }],
          pluginObjectRestSpreadSyntax,
          pluginAsyncGeneratorSyntax,
          pluginOptionalCatchBindingSyntax,
          pluginJsonStringsSyntax,
        ],
      });
    });

    test('{ shippedProposals: false }', () => {
      expect(preset(null, { target: '12', shippedProposals: false })).toEqual({
        plugins: [
          [pluginModulesCommonjs, { loose: false }],
          pluginObjectRestSpreadSyntax,
          pluginAsyncGeneratorSyntax,
          pluginOptionalCatchBindingSyntax,
        ],
      });
    });
  });
});

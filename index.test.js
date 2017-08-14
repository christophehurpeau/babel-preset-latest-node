/* eslint-disable max-lines */
jest.mock('babel-plugin-check-es2015-constants', () => 'babel-plugin-check-es2015-constants');
jest.mock(
  'babel-plugin-transform-es2015-modules-commonjs',
  () => 'babel-plugin-transform-es2015-modules-commonjs'
);
jest.mock(
  'babel-plugin-transform-es2015-arrow-functions',
  () => 'babel-plugin-transform-es2015-arrow-functions'
);
jest.mock(
  'babel-plugin-transform-es2015-function-name',
  () => 'babel-plugin-transform-es2015-function-name'
);
jest.mock(
  'babel-plugin-transform-exponentiation-operator',
  () => 'babel-plugin-transform-exponentiation-operator'
);
jest.mock(
  'babel-plugin-syntax-trailing-function-commas',
  () => 'babel-plugin-syntax-trailing-function-commas'
);
jest.mock(
  'babel-plugin-transform-async-to-generator',
  () => 'babel-plugin-transform-async-to-generator'
);
jest.mock(
  'babel-plugin-transform-object-rest-spread',
  () => 'babel-plugin-transform-object-rest-spread'
);
jest.mock('babel-plugin-syntax-object-rest-spread', () => 'babel-plugin-syntax-object-rest-spread');

const pluginCheckConstants = require('babel-plugin-check-es2015-constants');
const pluginModulesCommonjs = require('babel-plugin-transform-es2015-modules-commonjs');
const pluginArrowFunctions = require('babel-plugin-transform-es2015-arrow-functions');
const pluginFunctionName = require('babel-plugin-transform-es2015-function-name');
const pluginExponentiationOperator = require('babel-plugin-transform-exponentiation-operator');
const pluginSyntaxTrailingFunctionCommas = require('babel-plugin-syntax-trailing-function-commas');
const pluginAsync = require('babel-plugin-transform-async-to-generator');
const pluginTransformObjectRestSpread = require('babel-plugin-transform-object-rest-spread');
const pluginSyntaxObjectRestSpread = require('babel-plugin-syntax-object-rest-spread');

const preset = require('./');

describe('options', () => {
  describe('target', () => {
    test('6.1 is not a valid target', () => {
      expect(() => preset(null, { target: '6.1' })).toThrow(
        "Preset latest-node 'target' option must one of 6, 6.5, 7, 7.6, 8, 8.3, current."
      );
    });

    ['6', '6.5', '7', '7.6', '8', '8.3', 6, 6.5, 7, 7.6, 8, 8.3, 'current'].forEach(target => {
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

  describe('esnext', () => {
    test('xx is not a valid esnext option', () => {
      expect(() => preset(null, { target: 'current', esnext: 'xx' })).toThrow(
        "Preset latest-node 'esnext' option must be a boolean."
      );
    });

    [true, false].forEach(option => {
      test(`${option} is a valid esnext option`, () => {
        expect(preset(null, { target: 'current', esnext: option })).toBeDefined();
      });
    });
  });
});

describe('plugins', () => {
  test('6', () => {
    expect(preset(null, { target: '6' })).toEqual({
      plugins: [
        pluginCheckConstants,
        [pluginModulesCommonjs, { loose: false }],
        pluginArrowFunctions,
        pluginFunctionName,
        pluginExponentiationOperator,
        pluginSyntaxTrailingFunctionCommas,
        pluginAsync,
        [pluginTransformObjectRestSpread, { useBuiltIns: true }],
      ],
    });
  });

  test('6 loose: false', () => {
    expect(preset(null, { target: '6', loose: false })).toEqual({
      plugins: [
        pluginCheckConstants,
        [pluginModulesCommonjs, { loose: false }],
        pluginArrowFunctions,
        pluginFunctionName,
        pluginExponentiationOperator,
        pluginSyntaxTrailingFunctionCommas,
        pluginAsync,
        [pluginTransformObjectRestSpread, { useBuiltIns: true }],
      ],
    });
  });

  test('6 loose: true', () => {
    expect(preset(null, { target: '6', loose: true })).toEqual({
      plugins: [
        pluginCheckConstants,
        [pluginModulesCommonjs, { loose: true }],
        pluginArrowFunctions,
        pluginFunctionName,
        pluginExponentiationOperator,
        pluginSyntaxTrailingFunctionCommas,
        pluginAsync,
        [pluginTransformObjectRestSpread, { useBuiltIns: true }],
      ],
    });
  });

  test('6 modules: false', () => {
    expect(preset(null, { target: '6', modules: false })).toEqual({
      plugins: [
        pluginCheckConstants,
        pluginArrowFunctions,
        pluginFunctionName,
        pluginExponentiationOperator,
        pluginSyntaxTrailingFunctionCommas,
        pluginAsync,
        [pluginTransformObjectRestSpread, { useBuiltIns: true }],
      ],
    });
  });

  test('6.5', () => {
    expect(preset(null, { target: '6.5' })).toEqual({
      plugins: [
        pluginCheckConstants,
        [pluginModulesCommonjs, { loose: false }],
        pluginExponentiationOperator,
        pluginSyntaxTrailingFunctionCommas,
        pluginAsync,
        [pluginTransformObjectRestSpread, { useBuiltIns: true }],
      ],
    });
  });

  test('7', () => {
    expect(preset(null, { target: '7' })).toEqual({
      plugins: [
        pluginCheckConstants,
        [pluginModulesCommonjs, { loose: false }],
        pluginSyntaxTrailingFunctionCommas,
        pluginAsync,
        [pluginTransformObjectRestSpread, { useBuiltIns: true }],
      ],
    });
  });

  test('7.6', () => {
    expect(preset(null, { target: '7.6' })).toEqual({
      plugins: [
        pluginCheckConstants,
        [pluginModulesCommonjs, { loose: false }],
        pluginSyntaxTrailingFunctionCommas,
        [pluginTransformObjectRestSpread, { useBuiltIns: true }],
      ],
    });
  });

  test('8', () => {
    expect(preset(null, { target: '8' })).toEqual({
      plugins: [
        pluginCheckConstants,
        [pluginModulesCommonjs, { loose: false }],
        pluginSyntaxTrailingFunctionCommas,
        [pluginTransformObjectRestSpread, { useBuiltIns: true }],
      ],
    });
  });

  describe('8.3', () => {
    test('default options', () => {
      expect(preset(null, { target: '8.3' })).toEqual({
        plugins: [
          pluginCheckConstants,
          [pluginModulesCommonjs, { loose: false }],
          pluginSyntaxTrailingFunctionCommas,
          pluginSyntaxObjectRestSpread,
        ],
      });
    });

    test('{ esnext: false }', () => {
      expect(preset(null, { target: '8.3', esnext: false })).toEqual({
        plugins: [
          pluginCheckConstants,
          [pluginModulesCommonjs, { loose: false }],
          pluginSyntaxTrailingFunctionCommas,
        ],
      });
    });
  });
});

# babel-preset-latest-node [![NPM version][npm-image]][npm-url]

babel preset latest for node 7 (deprecated), node 8 (latest) or node 6 (LTS)

[![Dependency ci Status][dependencyci-image]][dependencyci-url]
[![Dependency Status][daviddm-image]][daviddm-url]

## Alternatives

- [babel-preset-env](https://www.npmjs.com/package/babel-preset-env)

## Options

- `target`: `6`, `6.5`, `7`, `7.6`, `8`, `8.3` or `'current'`
- `loose`: Enable “loose” transformations for any plugins in this preset that allow them (Disabled by default).
- `modules` - Enable transformation of ES6 module syntax to another module type (Enabled by default to "commonjs"). Can be false to not transform modules, or "commonjs"
- `es2016` - Enable es2016 features (Enabled by default)
- `es2017` - Enable es2017 features (Enabled by default)
- `esnext` - Enable features in stages but already available in recent node version (Enabled by default)

## [Compatibility Table](http://node.green/)


| Feature | Node 6 | Node 6.5 | Node 7 | Node 7.6 | Node 8 | Node 8.3 |
| ------- | ------ | -------- | ------ | -------- | ------ | -------- |
| <h3>ES2015</h3> ||||||
| [transform-es2015-modules-commonjs](https://babeljs.io/docs/plugins/transform-es2015-modules-commonjs) | no | no | no | no | no | no |
| [transform-es2015-function-name](https://babeljs.io/docs/plugins/transform-es2015-function-name) | flag | yes | yes | yes | yes | yes |
| <h3>ES2016</h3> ||||||
| [transform-exponentiation-operator](https://babeljs.io/docs/plugins/transform-exponentiation-operator) | no | flag | yes | yes | yes | yes |
| <h3>ES2017</h3> ||||||
| [syntax-trailing-function-commas](https://babeljs.io/docs/plugins/syntax-trailing-function-commas) | no | no | no | no | yes | yes |
| [transform-async-to-generator](https://babeljs.io/docs/plugins/transform-async-to-generator) | no | no | flag | yes | yes | yes |
| <h3>ESNEXT</h3> ||||||
| [transform-object-rest-spread](https://babeljs.io/docs/plugins/transform-object-rest-spread) | no | no | no | no | flag | yes |

## Install

```bash
npm install --save-dev babel-preset-latest-node
yarn add --dev babel-preset-latest-node
```

## Usage

### Via `.babelrc`

**.babelrc**

```json
{
  "presets": ["latest-node"]
}
```

```json
{
  "presets": [["latest-node", { "target": "current" }]]
}
```

### Via CLI

```sh
babel script.js --presets latest-node
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: [require('babel-preset-latest-node')]
});
```

```javascript
require("babel-core").transform("code", {
  presets: [[require('babel-preset-latest-node'), { target: 'current' }]]
});
```

[npm-image]: https://img.shields.io/npm/v/babel-preset-latest-node.svg?style=flat-square
[npm-url]: https://npmjs.org/package/babel-preset-latest-node
[daviddm-image]: https://david-dm.org/christophehurpeau/babel-preset-latest-node.svg?style=flat-square
[daviddm-url]: https://david-dm.org/christophehurpeau/babel-preset-latest-node
[dependencyci-image]: https://dependencyci.com/github/christophehurpeau/babel-preset-latest-node/badge?style=flat-square
[dependencyci-url]: https://dependencyci.com/github/christophehurpeau/babel-preset-latest-node

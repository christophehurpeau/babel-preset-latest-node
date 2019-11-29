<h3 align="center">
  babel-preset-latest-node
</h3>

<p align="center">
  babel preset latest for node 12 (Current), node 10 (Active LTS) node 8 (Maintenance LTS April 2019)
</p>

<p align="center">
  <a href="https://npmjs.org/package/babel-preset-latest-node"><img src="https://img.shields.io/npm/v/babel-preset-latest-node.svg?style=flat-square"></a>
  <a href="https://circleci.com/gh/christophehurpeau/babel-preset-latest-node"><img src="https://img.shields.io/circleci/project/christophehurpeau/babel-preset-latest-node/master.svg?style=flat-square"></a>
  <a href="https://david-dm.org/christophehurpeau/babel-preset-latest-node"><img src="https://david-dm.org/christophehurpeau/babel-preset-latest-node.svg?style=flat-square"></a>
</p>

# babel 7

Since v2, this package requires `@babel/core@^7.0.0`. If you use babel 6, you can still use the version "1.0.0" of this package. If you want to migrate, you can read the [announcement](https://babeljs.io/blog/2018/08/27/7.0.0) and the [official migration guide](https://babeljs.io/docs/en/v7-migration).

## Alternatives

- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env), especially `targets.node`

## Options

- `target`: `6`, `6.5`, `8`, `8.3`, `10`, `11`, `12`, `13` or `'current'` (`process.versions.node`)
- `loose`: Enable “loose” transformations for any plugins in this preset that allow them (Disabled by default).
- `modules` - Enable transformation of ES6 module syntax to another module type (Enabled by default to "commonjs"). Can be false to not transform modules, or "commonjs"
- `es2016` - Enable es2016 features (Enabled by default)
- `es2017` - Enable es2017 features (Enabled by default)
- `es2018` - Enable es2018 features (Enabled by default)
- `es2019` - Enable es2019 features (Enabled by default)
- `shippedProposals` - Enable features in stages but already available in recent node version (Enabled by default)

## [Compatibility Table](http://node.green/)


| Feature                                                                                                              | Node 6 | Node 6.5 | Node 8 | Node 8.3 | Node 10 | Node 10.13 | Node 11/12/13 |
| -------------------------------------------------------------------------------------------------------------------- | ------ | -------- | ------ | -------- | ------- | ---------- | ------------- |
| <h3>ES2015</h3>                                                                                                      |        |          |        |          |         |
| [transform-modules-commonjs](https://www.npmjs.com/package/@babel/plugin-transform-modules-commonjs)                 | no     | no       | no     | no       | flag    | flag       | flag          |
| [transform-function-name](https://www.npmjs.com/package/@babel/plugin-transform-function-name)                       | flag   | yes      | yes    | yes      | yes     | yes        | yes           |
| <h3>ES2016</h3>                                                                                                      |        |          |        |          |         |
| [transform-exponentiation-operator](https://www.npmjs.com/package/@babel/plugin-transform-exponentiation-operator)   | no     | flag     | yes    | yes      | yes     | yes        | yes           |
| <h3>ES2017</h3>                                                                                                      |        |          |        |          |         |
| [transform-async-to-generator](https://www.npmjs.com/package/@babel/transform-async-to-generator)                    | no     | no       | yes    | yes      | yes     | yes        | yes           |
| <h3>ES2018</h3>                                                                                                      |        |          |        |          |         |
| [proposal-object-rest-spread](https://www.npmjs.com/package/@babel/plugin-proposal-object-rest-spread)               | no     | no       | flag   | yes      | yes     | yes        | yes           |
| [proposal-unicode-property-regex](https://www.npmjs.com/package/@babel/plugin-proposal-unicode-property-regex)       | no     | no       | no     | flag     | yes     | yes        | yes           |
| [proposal-async-generator-functions](https://www.npmjs.com/package/@babel/plugin-proposal-async-generator-functions) | no     | no       | no     | no       | yes     | yes        | yes           |
| <h3>ES2019</h3>                                                                                                      |        |          |        |          |         |
| [syntax-optional-catch-binding](https://www.npmjs.com/package/@babel/plugin-syntax-optional-catch-binding)           | no     | no       | no     | no       | flag    | yes        | yes           |
| <h3>Shipped Proposals</h3>                                                                                           |        |          |        |          |         |
| [syntax-json-strings](https://www.npmjs.com/package/@babel/plugin-syntax-json-strings)                               | no     | no       | no     | no       | yes     | yes        | yes           |

## Install

```bash
npm install --save-dev @babel/core babel-preset-latest-node
yarn add --dev @babel/core babel-preset-latest-node
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

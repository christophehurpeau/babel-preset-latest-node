<h3 align="center">
  babel-preset-latest-node
</h3>

<p align="center">
  babel preset latest for node 14 (Current), node 12 (Active LTS) node 10 (Maintenance LTS)
</p>

<p align="center">
  <a href="https://npmjs.org/package/babel-preset-latest-node"><img src="https://img.shields.io/npm/v/babel-preset-latest-node.svg?style=flat-square"></a>
</p>

# babel 7

Since v2, this package requires `@babel/core@^7.0.0`. If you use babel 6, you can still use the version "1.0.0" of this package. If you want to migrate, you can read the [announcement](https://babeljs.io/blog/2018/08/27/7.0.0) and the [official migration guide](https://babeljs.io/docs/en/v7-migration).

## Alternatives

- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env), especially `targets.node`

## Options

- `target`: `10`, `10.13`, `12`, `12.10`, `14` or `'current'` (`process.versions.node`)
- `loose`: Enable “loose” transformations for any plugins in this preset that allow them (Disabled by default).
- `modules` - Enable transformation of ES6 module syntax to another module type (Enabled by default to "commonjs"). Can be false to not transform modules, or "commonjs"
- `es2019` - Enable es2019 features (Enabled by default)
- `es2020` - Enable es2020 features (Enabled by default)
- `shippedProposals` - Enable features in stages but already available in recent node version (Enabled by default)

## [Compatibility Table](http://node.green/)

| Feature                                                                                                         | Node 10 | Node 10.13 | Node 12 | Node 14   | Node 14.8 |
| --------------------------------------------------------------------------------------------------------------- | ------- | ---------- | ------- | --------- | --------- |
| <h3>ES2015</h3>                                                                                                 |         |            |         |           |
| [transform-modules-commonjs](https://www.npmjs.com/package/@babel/plugin-transform-modules-commonjs)            | flag    | flag       | flag    | with .mjs | with .mjs |
| <h3>ES2019</h3>                                                                                                 |         |            |         |           |
| [syntax-optional-catch-binding](https://www.npmjs.com/package/@babel/plugin-syntax-optional-catch-binding)      | flag    | yes        | yes     | yes       | yes       |
| [json-strings](https://www.npmjs.com/package/@babel/plugin-proposal-json-strings)                               | yes     | yes        | yes     | yes       | yes       |
| <h3>ES2020</h3>                                                                                                 |         |            |         |           |
| [nullish-coalescing-operator](https://www.npmjs.com/package/@babel/plugin-proposal-nullish-coalescing-operator) | no      | no         | no      | yes       | yes       |
| [optional-chaining](https://www.npmjs.com/package/@babel/plugin-proposal-optional-chaining)                     | no      | no         | no      | yes       | yes       |
| <h3>Shipped Proposals</h3>                                                                                      |         |            |         |           |
| [numeric-separator](https://www.npmjs.com/package/@babel/plugin-proposal-numeric-separator)                     | no      | no         | no      | yes       | yes       |
| [top-level-await](https://www.npmjs.com/package/@babel/plugin-syntax-top-level-await)                           | no      | no         | no      | no        | yes       |

Note that top level await is syntax only and is only available for supported versions.

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
require('babel-core').transform('code', {
  presets: [require('babel-preset-latest-node')],
});
```

```javascript
require('babel-core').transform('code', {
  presets: [[require('babel-preset-latest-node'), { target: 'current' }]],
});
```

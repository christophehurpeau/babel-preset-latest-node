# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [5.5.1](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v5.5.0...v5.5.1) (2021-03-14)


### Bug Fixes

* remove yarn in engines ([5b17c78](https://github.com/christophehurpeau/babel-preset-latest-node/commit/5b17c7847085643a8406ea8c731c14e401c44a46))

## [5.5.0](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v5.4.0...v5.5.0) (2021-03-14)


### Features

* update babel deps ([0f4b12a](https://github.com/christophehurpeau/babel-preset-latest-node/commit/0f4b12ad90e3de962c0a5acf4956ca507c109acd))


### Bug Fixes

* use proposal-numeric-separator for node < 14 ([d50e121](https://github.com/christophehurpeau/babel-preset-latest-node/commit/d50e1212adeb88be5ce1203a1c057148c4178a3f))

## [5.4.0](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v5.2.0...v5.4.0) (2021-01-17)

### Features

- update babel deps ([a732b74](https://github.com/christophehurpeau/babel-preset-latest-node/commit/a732b74df2f0b1770437714bfb58334316fbe2e7))

## [5.3.0](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v5.2.0...v5.3.0) (2021-01-17)

### Features

- update babel deps ([a732b74](https://github.com/christophehurpeau/babel-preset-latest-node/commit/a732b74df2f0b1770437714bfb58334316fbe2e7))

## [5.2.0](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v5.1.1...v5.2.0) (2020-12-05)

### Features

- add @babel/plugin-syntax-top-level-await for node 14.8 and higher ([47c8c88](https://github.com/christophehurpeau/babel-preset-latest-node/commit/47c8c886626aff962ba27e9153d279d702e294c0))

### [5.1.1](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v5.1.0...v5.1.1) (2020-11-13)

### Bug Fixes

- remove yarn in engines ([83318fe](https://github.com/christophehurpeau/babel-preset-latest-node/commit/83318fe0b52f3ec606bb8adc73ab4be8ef2a1354))

## [5.1.0](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v5.0.0...v5.1.0) (2020-11-13)

### Features

- accept target 12.10 ([ed16358](https://github.com/christophehurpeau/babel-preset-latest-node/commit/ed16358c128e7df0534afca64b17d93acc268e4b))
- set sideEffects in package.json ([9464031](https://github.com/christophehurpeau/babel-preset-latest-node/commit/9464031686d0432d40ffa8f7f4e3ecba5bdb731c))

## [5.0.0](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v4.1.0...v5.0.0) (2020-09-19)

### ⚠ BREAKING CHANGES

- drop target 11 and 13
- requires latest @babel/core

### Features

- add node 14, es2020 and numeric-separator for shipped proposals ([a6437f3](https://github.com/christophehurpeau/babel-preset-latest-node/commit/a6437f354cb22162f4b861249f224c63dbee7ccb))
- drop target 11 and 13 ([5adddfd](https://github.com/christophehurpeau/babel-preset-latest-node/commit/5adddfdbc464169d7acbea8afb93488961acf0f4))

## [4.0.1](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v4.0.0...v4.0.1) (2019-12-14)

### Bug Fixes

- require default from latest plugins ([30708ae](https://github.com/christophehurpeau/babel-preset-latest-node/commit/30708aea524cdd031857e767bd7ec3fa076cb619))

# [4.0.0](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v3.2.1...v4.0.0) (2019-12-13)

### Features

- add nullish coalescing operator and optional chaining ([f9e89f1](https://github.com/christophehurpeau/babel-preset-latest-node/commit/f9e89f1a1a1a55609c567fae0765ffcdad648471))
- add support for node 12 ([212b1b9](https://github.com/christophehurpeau/babel-preset-latest-node/commit/212b1b9f7a6f11c00df9d2035e80c914d3077964))
- drop node 6 and node 8 ([5974020](https://github.com/christophehurpeau/babel-preset-latest-node/commit/5974020f29ff18765904cffe5a26b41c8f15600f))
- update dependencies ([a50d541](https://github.com/christophehurpeau/babel-preset-latest-node/commit/a50d5410cc37d375fedd649835b4185bf4ead075))

### BREAKING CHANGES

- node 6 and node 8 no longer supported, removed options es2016, es2017, es2018 and esnext (replaced by shippedProposals)

## [3.2.1](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v3.2.0...v3.2.1) (2019-05-09)

### Bug Fixes

- check option es2019 ([b959ffd](https://github.com/christophehurpeau/babel-preset-latest-node/commit/b959ffd26ad1545a228d92468751eb6765ee3831))

# [3.2.0](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v3.1.1...v3.2.0) (2019-05-09)

### Features

- add es2019 option and plugin-proposal-json-strings in shippedProposals ([dfc2534](https://github.com/christophehurpeau/babel-preset-latest-node/commit/dfc25344d61bbe565c52e5f2faa78854514bfea0))
- support node 12 ([38037b9](https://github.com/christophehurpeau/babel-preset-latest-node/commit/38037b91d81399f816fbe88d6f977ea3612697ea))
- update dependencies ([b0d6da8](https://github.com/christophehurpeau/babel-preset-latest-node/commit/b0d6da8c4015e66f45baee2c13436c3e7aac7024))

## [3.1.1](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v3.1.0...v3.1.1) (2019-03-12)

### Bug Fixes

- make target option optional ([76fdc33](https://github.com/christophehurpeau/babel-preset-latest-node/commit/76fdc3333d5853db83e386a67b060dd59eb10885)), closes [#60](https://github.com/christophehurpeau/babel-preset-latest-node/issues/60)

# [3.1.0](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v3.0.1...v3.1.0) (2019-03-09)

### Features

- update deps ([0baad94](https://github.com/christophehurpeau/babel-preset-latest-node/commit/0baad9473e02de7adda524fbf5113fe760a4f9b2))

## [3.0.1](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v3.0.0...v3.0.1) (2018-11-23)

# [3.0.0](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v2.1.0...v3.0.0) (2018-11-23)

### Features

- drop node 7 ([8b504ec](https://github.com/christophehurpeau/babel-preset-latest-node/commit/8b504ec3a1e0d091947eda0860afdaf683d9da5b))
- drop node 9 ([8a4a729](https://github.com/christophehurpeau/babel-preset-latest-node/commit/8a4a7292f972039271f9430cce53c10f017785fb))

### BREAKING CHANGES

- 9 no longer works in target
- 7 and 7.5 no longer works in target

# [2.1.0](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v2.0.2...v2.1.0) (2018-11-23)

### Features

- add node 10.13, 11 support and plugin-proposal-optional-catch-binding ([2fb4dc9](https://github.com/christophehurpeau/babel-preset-latest-node/commit/2fb4dc9da312f58d94a75b9e314203981258ca41))
- update plugins deps ([e349573](https://github.com/christophehurpeau/babel-preset-latest-node/commit/e349573d97c020b49e7b549999672370a5bfc825))

## [2.0.2](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v2.0.1...v2.0.2) (2018-08-28)

## [2.0.1](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v2.0.0...v2.0.1) (2018-08-28)

# [2.0.0](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v2.0.0-beta.3...v2.0.0) (2018-08-28)

### Features

- babel 7 ([c175ad1](https://github.com/christophehurpeau/babel-preset-latest-node/commit/c175ad1f6370f75aa8512dd1922d35b10365dd81))

# [2.0.0-beta.3](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2018-04-27)

### chore

- update dependencies ([05613c1](https://github.com/christophehurpeau/babel-preset-latest-node/commit/05613c1ce027946889d076adb05e6f93bc726b12))

### BREAKING CHANGES

- drop node4 support

# [2.0.0-beta.2](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2018-04-06)

### Bug Fixes

- async iterators is in the es2018 spec ([1ecaaf8](https://github.com/christophehurpeau/babel-preset-latest-node/commit/1ecaaf8c9c3f2e0a9a4ce0ca63b757d59a79f7a8))

# [2.0.0-beta.1](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v1.0.0...v2.0.0-beta.1) (2018-04-06)

### Features

- babel 7 and node 10 ([0857d96](https://github.com/christophehurpeau/babel-preset-latest-node/commit/0857d966728eabe1264cd35b53be0cddbc8a9acc))

# [1.0.0](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v0.4.0...v1.0.0) (2018-02-16)

### Features

- add node 9 and rename esnext to shippedProposals ([5754ecd](https://github.com/christophehurpeau/babel-preset-latest-node/commit/5754ecd1f48599b829b5ab44514d92bd47848767))

# [0.4.0](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v0.3.1...v0.4.0) (2017-08-14)

### Features

- option esnext and node 8.3 ([f5a0d17](https://github.com/christophehurpeau/babel-preset-latest-node/commit/f5a0d17db208d06244544bfe89b2f79b16602695))

## [0.3.1](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v0.3.0...v0.3.1) (2017-07-09)

# [0.3.0](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v0.2.2...v0.3.0) (2017-06-22)

### Features

- support node 8, versions as string ([a04928c](https://github.com/christophehurpeau/babel-preset-latest-node/commit/a04928c5092c36628ad0525419f920804ffb3cf6))
- update dependencies ([9915fd2](https://github.com/christophehurpeau/babel-preset-latest-node/commit/9915fd2ea4b90ac7859b3fc6ee36dc75b5e2c7b5))

## [0.2.2](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v0.2.1...v0.2.2) (2017-03-21)

### Bug Fixes

- invalid indexOf ([a798238](https://github.com/christophehurpeau/babel-preset-latest-node/commit/a79823805c41225f37eb161dacaac1d75c5b8242))

## [0.2.1](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v0.2.0...v0.2.1) (2017-03-21)

### Bug Fixes

- support node 4 ([e3642b7](https://github.com/christophehurpeau/babel-preset-latest-node/commit/e3642b71e0d3a98f15689fabe67f26b48a3ab53e))

# [0.2.0](https://github.com/christophehurpeau/babel-preset-latest-node/compare/v0.1.0...v0.2.0) (2017-03-21)

### Features

- update dependencies ([364d306](https://github.com/christophehurpeau/babel-preset-latest-node/commit/364d306c3701c8ed9022b32cecc76f818c4e8075))

# [0.1.0](https://github.com/christophehurpeau/babel-preset-latest-node/compare/7fdf82c61b9799b178faf1b1776ef3317704d517...v0.1.0) (2017-02-27)

### Features

- first commit ([7fdf82c](https://github.com/christophehurpeau/babel-preset-latest-node/commit/7fdf82c61b9799b178faf1b1776ef3317704d517))

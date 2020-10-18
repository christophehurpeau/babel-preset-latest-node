'use strict';

const { spawnSync } = require('child_process');

let createHuskyConfig;

try {
  createHuskyConfig = require('@pob/root/createHuskyConfig');
} catch {
  spawnSync('npm', ['install'], { stdio: 'inherit' });
  createHuskyConfig = require('@pob/root/createHuskyConfig');
}

module.exports = createHuskyConfig();

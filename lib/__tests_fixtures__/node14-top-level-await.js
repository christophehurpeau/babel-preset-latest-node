'use strict';

exports.presetOptions = {
  target: '14',
};

exports.actual = `
const p = new Promise((resolve) => setTimeout(resolve, 200));
await p;
`;

exports.expectedSyntaxError = `
unknown: 'await' is only allowed within async functions (3:0)
`;

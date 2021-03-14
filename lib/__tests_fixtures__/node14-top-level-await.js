'use strict';

exports.presetOptions = {
  target: '14',
};

exports.actual = `
const p = new Promise((resolve) => setTimeout(resolve, 200));
await p;
`;

exports.expectedSyntaxError = `
unknown: Unexpected reserved word 'await' (3:0)
`;

'use strict';

exports.presetOptions = {
  target: '14',
};

exports.actual = `
const p = new Promise((resolve) => setTimeout(resolve, 200));
await p;
`;

exports.expectedSyntaxError = `
unknown: Can not use keyword 'await' outside an async function (3:0)
`;

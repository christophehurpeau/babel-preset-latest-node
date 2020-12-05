'use strict';

exports.presetOptions = {
  target: '14.8',
};

exports.actual = `
const p = new Promise((resolve) => setTimeout(resolve, 200));
await p;
`;

exports.expected = `
"use strict";

const p = new Promise(resolve => setTimeout(resolve, 200));
await p;
`;

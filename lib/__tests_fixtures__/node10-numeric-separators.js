'use strict';

exports.presetOptions = {
  target: '10',
};

exports.actual = `
console.log(1_000_000);
`;

exports.expected = `
"use strict";

console.log(1000000);
`;

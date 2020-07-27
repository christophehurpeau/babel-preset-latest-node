'use strict';

exports.presetOptions = {
  target: '10',
};

exports.actual = `
console.log('\u2028');
`;

exports.expected = `
"use strict";

console.log('\u2028');
`;

'use strict';

exports.presetOptions = {
  target: '10',
};

exports.actual = `
try {
  throw new Error();
} catch {
}
`;

exports.expected = `
"use strict";

try {
  throw new Error();
} catch (_unused) {}
`;

'use strict';

exports.presetOptions = {
  target: '12',
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
} catch {}
`;

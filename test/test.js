const assert = require('assert');
const fs = require("fs");
const hljs = require('highlight.js');
const why3Hljs = require('../src/languages/why3.js');

describe('why3 hljs', function() {
  it('should detect and highlight example.mlw correctly', function() {
    hljs.registerLanguage('why3', why3Hljs);

    const testWhy3 = fs.readFileSync('test/markup/why3/example.mlw', 'utf-8');
    const testWhy3Expected = fs.readFileSync('test/markup/why3/example.expected.mlw', 'utf-8');

    const highlighted = hljs.highlight(testWhy3, { language: 'why3' });

    assert.equal(highlighted.value, testWhy3Expected);
  });
});

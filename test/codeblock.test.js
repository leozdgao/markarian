var parser = require('../src/parsers/parser');
var expect = require('chai').expect;

var input =
    "```" + " \tjavascript   \t" + "\n" +
    "var elem = document.getElementById('key');" + "\n" +
    "console.log(elem.value);" + "\n" +
    "```" + "\n";

var output =
    "<pre><code class=\"javascript\">" +
    "var elem = document.getElementById('key');" + "\n" +
    "console.log(elem.value);" +
    "</code></pre>" + "\n";

describe('Test code block parser', function() {
  it('should escape HTML tags', function() {
    var ret = parser.codeblock("```\n<>&\n```");
    expect(ret).to.equal('<pre><code>&lt;&gt;&amp;</code></pre>');
  })
  it('should recoganize if be started with the input.', function() {
    var ret = parser.codeblock(input);
    expect(ret).to.equal(output);
  });
  it('should recoganize if start with a new line mark.', function() {
    var newInput = '~Extra\n' + input;
    var ret = parser.codeblock(newInput);
    expect(ret).to.equal('~Extra' + output);
  });
});

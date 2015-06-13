var parser = require('../src/parsers/parser');
var expect = require('chai').expect;

describe('Test stripping blank lines', function() {
  it('should strip the blank lines', function() {
    var input =
        " \t\t " + "\n" +
        " \taa" + "\n" +
        "  " + "\n" +
        "\t\t" + "\n"
    var output =
        "" + "\n" +
        " \taa" + "\n" +
        "" + "\n" +
        "" + "\n"
    var ret = parser.stripblanklines(input);
    expect(ret).to.equal(output);
  });
});

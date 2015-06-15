var util = require('../src/util');
var expect = require('chai').expect;

describe('Test util', function() {
  it('strip the blank lines', function() {
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
    var ret = util.stripblanklines(input);
    expect(ret).to.equal(output);
  });
  it('detab the input', function() {
    var input = 'a\tbb\tccc\td';
    var output = 'a   bb  ccc d';

    var ret = util.detab(input);
    expect(ret).to.equal(output);
  });
});

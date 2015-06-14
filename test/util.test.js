var util = require('../src/util');
var expect = require('chai').expect;

describe('Test util, stripping blank lines', function() {
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
    var ret = util.stripblanklines(input);
    expect(ret).to.equal(output);
  });
});

describe('Test util, detabbing the input', function() {
  it('should detab the string', function() {
    var input = 'a\tbb\tccc\td';
    var output = 'a   bb  ccc d';

    var ret = util.detab(input);
    expect(ret).to.equal(output);
  });
});

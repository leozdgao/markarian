var parser = require('./parsers/parser');
var util = require('./util');

/**
 * Constructor of the parser.
 *
 * Options:
 *   headersId: {Boolean|Function}
 *
 *
 * @constructor
 * @param  {Object} opts - Options for the parser.
 */
var Markarian = module.exports = function(opts) {

};

/**
 * Parse the input to a HTML markup.
 *
 * @param {String} input - The input which should meet the markdown syntax.
 * @return {String}       The HTML markup.
 */
Markarian.prototype.parse = function(input) {
  // check input, should be a string
  if(!util.isString(input)) throw 'The input should be a string.';
  
  // integrate the new line mark between platforms
  input = input.replace(/\r\n/g, '\n');  // windows
  input = input.replace(/\r/g, '\n');  // OSX
  // strip blank lines
  input = parser.stripblanklines(input);
  // replace the start '\n' and the end '\n'

  return input;
};

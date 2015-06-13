/**
 * Strip the lines which only contain tab or blanks.
 *
 * @param  {String} input - The input which should meet the markdown syntax.
 * @return {String}       The string after striping.
 */
module.exports = function(input) {
  return input.replace(/^[ \t]+$/mg, '');
}

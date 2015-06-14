exports.isString = function(val) {
  return typeof val == 'string' || val instanceof String;
};

exports.escapeHTML = function(input) {
  input = input.replace(/&/g, '&amp;');
  input = input.replace(/</g, '&lt;');
  input = input.replace(/>/g, '&gt;');
  return input;
};

exports.repeat = function(character, num) {
  var ret = '';
  for(var i = 0; i < +num; i++) ret += character;
  return ret;
};

/**
 * Convert tab to space.
 *
 * @param  {String} input - A input stirng.
 * @param  {Number} tabSpace - Length of a tab.
 * @return {String}          Detabbed string.
 */
exports.detab = function(input, tabSpace) {
  tabSpace = Number(tabSpace); // convert to number
  if(isNaN(tabSpace) || tabSpace < 1) tabSpace = 4;

  input = input.replace(/\t(?=\t)/g, exports.repeat(' ', tabSpace)); // convert n-1 tab to space

  input = input.replace(/(.+?)\t/g, function(match, span) {
    var num = tabSpace - span.length % tabSpace;
    span += exports.repeat(' ', num);
    return span;
  });

  return input;
};

/**
 * Strip the lines which only contain tab or blanks.
 *
 * @param  {String} input - The input which should meet the markdown syntax.
 * @return {String}       The string after striping.
 */
exports.stripblanklines = function(input) {
  return input.replace(/^[ \t]+$/mg, '');
}

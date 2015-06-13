exports.isString = function(val) {
  return typeof val == 'string' || val instanceof String;
};

exports.escapeHTML = function(input) {
  input = input.replace(/&/g, '&amp;');
  input = input.replace(/</g, '&lt;');
  input = input.replace(/>/g, '&gt;');
  return input;
};

exports.detab = function(input, tabSpace) {
  var num = Number(tabSpace); // convert to number
  if(isNaN(num) || num < 1) tabSpace = 4;

  return input;
};

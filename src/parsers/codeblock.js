var util = require('../util');
/**
 * Parser for code block.
 *
 * Example:
 *
 * ```javascript
 * var elem = document.getElementById('key');
 * console.log(elem.value);
 * ```
 *
 * Should be converted to: [TODO: syntax highlight?]
 *
 * <pre><code>
 * var elem = document.getElementById('key');
 * console.log(elem.value);
 * </code></pre>
 *
 * /
 * (?:^|\n)             - Start with a new line or be started with the input
 * ```(.*)\n            - Try to match the language
 * ([\s\S]*?)\n         - Try to match all code block, include the new line mark
 * ```
 * /g;
 *
 * @param  {String} input - The input which should meet the markdown syntax.
 * @return {String}       HTML markup.
 */
module.exports = function(input) {
  var cbRegex = /(?:^|\n)```(.*)\n([\s\S]*?)\n```/g;

  input = input.replace(cbRegex, function(match, lang, codeblock) {
    lang = util.detab(lang);
    lang = lang.replace(/^[ ]+/g, '');
    lang = lang.replace(/[ ]+$/g, '');

    codeblock = util.detab(codeblock);
    codeblock = util.escapeHTML(codeblock);

    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading new lines
    codeblock = codeblock.replace(/\n+$/g, ''); // trim tailing new lines

    return '<pre><code' + (lang ? (' class="' + lang + '"') : '') + '>' + codeblock + '</code></pre>';
  });

  return input;
}

module.exports = function(str, len, ch) {
  str = String(str);

  if (!ch && ch !== 0) ch = ' ';

  len = len - str.length;

  return addCharsLg(str, len, ch);
};

function addCharsLg(str, len, ch) {
  if (len % 2 === 1) return ch + addCharsLg(str, len - 1, ch);

  if (len >= 2) return addCharsLg(str, len / 2, ch + ch);

  return str;
}
module.exports = function(str, len, ch) {
    str = String(str);

    if (!ch && ch !== 0) ch = ' ';

    len = len - str.length;

    var pad = ch;
    while (pad.length * 2 <= len) {
        pad += pad;
    }
    if (len % 2 == 1) {
        pad += ch;
    }
    return pad + str;
};

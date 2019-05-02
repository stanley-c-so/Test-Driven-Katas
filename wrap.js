
const wrap = (line, maxLen) => {
    if (!line || maxLen <= 0) return line;

    if (line.charAt(maxLen - 1) !== ' ') {      // not a space

    } else {    // is a space

    }

}; 

module.exports = wrap;

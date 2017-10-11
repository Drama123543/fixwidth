function numberfixwidth (number, digits) {
  if (typeof number !== 'number') { throw new Error('not a number: ' + number); }
  var s = number.toString();
  var s_len = s.length;
  if (s_len > digits) {
    return s.substr(s_len - digits, s_len);
  }
  s = [s];
  while (s_len < digits) {
    s.unshift('0');
    s_len++;
  }
  return s.join('');
};

module.exports = numberfixwidth;
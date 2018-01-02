function fixwidth (str, digits) {
  var s = str.toString();
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

module.exports = fixwidth;

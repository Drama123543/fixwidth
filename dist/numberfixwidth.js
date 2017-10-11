require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"numberfixwidth":[function(require,module,exports){
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
},{}]},{},[]);

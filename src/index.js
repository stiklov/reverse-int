module.exports = function reverse (n) {
  if (n < 0) n = -n;
  n = String(n).split('').reverse().join('');
  return +n;
}

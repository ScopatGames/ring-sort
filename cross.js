let Point = require('./point');

module.exports = function (a, b) {
  return new Point(
    a.y*b.z - a.z*b.y,
    a.z*b.x - a.x*b.z,
    a.x*b.y - a.y*b.x
  );
}
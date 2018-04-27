let Point = require('./point');

let getCenterPoint = function (pointsArray){
  const reducer = (accumulator, currentValue) => {
    return new Point(
      accumulator.x + currentValue.x,
      accumulator.y + currentValue.y,
      accumulator.z + currentValue.z);
  }

  let length = pointsArray.length;

  let pointSum = pointsArray.reduce(reducer);

  return new Point(pointSum.x/length, pointSum.y/length, pointSum.z/length);
}

module.exports = function (pointsArray, direction){
  let centerPoint = getCenterPoint(pointsArray);

  return centerPoint;


}

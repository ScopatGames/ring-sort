const Point = require('./point');
const cross = require('./cross');
const dot = require('./dot');

const getCenterPoint = function (pointsArray){

  const length = pointsArray.length;

  return pointsArray.reduce(
    (accumulator, currentValue) => accumulator.plus(currentValue) 
  ).divideByScalar(length);

}


module.exports = function (pointsArray, direction){
  const centerPoint = getCenterPoint(pointsArray);

  const sign = direction ? 1 : -1;

  const normal = cross(pointsArray[0], pointsArray[1]).multiplyByScalar(sign);

  const testOrder = function ( a, b ){
    return dot(normal, cross(a.minus(centerPoint), b.minus(centerPoint)));
  }

  return pointsArray.sort(testOrder);
}

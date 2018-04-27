let Point = require('./point');

let getCenterPoint = function (pointsArray){

  let length = pointsArray.length;

  return pointsArray.reduce(
    (accumulator, currentValue) => accumulator.plus(currentValue) 
  ).divideByScalar(length);

}

module.exports = function (pointsArray, direction){
  let centerPoint = getCenterPoint(pointsArray);

  return centerPoint;


}

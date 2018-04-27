const Point = require('./point');
const dot = require('./dot');
const cross = require('./cross');
const ringSort = require('./ringSort');

let points = [
  new Point(1, 3, 0),
  new Point(-1, 1, 0), 
  new Point(-1, 3, 0),
  new Point(1, 0, 0)
];
console.log('original array:');
console.log(points);
points = ringSort(points, false);
console.log('sorted array:');
console.log(points);
console.log('reversed array:');
console.log(ringSort(points, true));
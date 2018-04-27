let Point = require('./point');
let dot = require('./dot');
let cross = require('./cross');
let ringSort = require('./ringSort');

let points = [
  new Point(0,0,0), 
  new Point(-1, 0, 0),
  new Point(0, 1, 0),
  new Point(1, 0, 0)
];
console.log(ringSort(points));
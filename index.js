class Point {
  constructor(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

let points = [
  new Point(0,0,0), 
  new Point(-1, 0, 0),
  new Point(0, 1, 0),
  new Point(1, 0, 0)
];


function dot(a, b){
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

function cross(a, b) {
  return new Point(
    a.y*b.z - a.z*b.y,
    a.z*b.x - a.x*b.z,
    a.x*b.y - a.y*b.x
  );
  
  return [
    x[1]*y[2]-x[2]*y[1],
    x[2]*y[0]-x[0]*y[2],
    x[0]*y[1]-x[1]*y[0]
  ];
}

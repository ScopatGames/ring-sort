module.exports = class Point {
    constructor(x, y, z){
      this.x = x;
      this.y = y;
      this.z = z;
    }

    minus(point){
      return new Point(
        this.x - point.x,
        this.y - point.y,
        this.z - point.z
      );
    }

    plus(point){
      return new Point(
        this.x + point.x,
        this.y + point.y,
        this.z + point.z
      );
    }

    multiplyByScalar(scalar){
      return new Point(
        this.x*scalar,
        this.y*scalar,
        this.z*scalar
      )
    }

    divideByScalar(scalar){
      return new Point(
        this.x/scalar,
        this.y/scalar,
        this.z/scalar
      )
    }

  }
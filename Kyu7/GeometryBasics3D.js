function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
}

class Point {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

console.log(distanceBetweenPoints(new Point(1, 3, 5), new Point(1, 3, 5)));

// https: //www.codewars.com/kata/58dceee2c9613aacb40000b9/train/javascript
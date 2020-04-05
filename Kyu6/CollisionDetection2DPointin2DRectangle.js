class Point2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

Point2.prototype.toString = function() {
    return `(${this.x}, ${this.y})`;
}

// function Rectangle2(rotation : Number, widthX : Number, widthY : Number, position : Point2)
function Rectangle2(rotation, widthX, widthY, position) {
    this.rotation = rotation;
    this.widthX = widthX;
    this.widthY = widthY;
    this.position = position;
}

Rectangle2.prototype.toString = function() {
    return `(${this.rotation}, ${this.widthX}, ${this.widthY}, ${this.position.toString()})`;
}

function handle(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}

function handleCollision(rectangle, point) {
    if (Math.abs(point.x) < rectangle.widthX / 2 && Math.abs(point.y) < rectangle.widthY / 2) {
        return true;
    }
    return false;
}

Math.cosDeg = function(deg) {
    return Math.cos(deg * Math.PI / 180);
}

Math.sinDeg = function(deg) {
    return Math.sin(deg * Math.PI / 180);
}

Math.acosDeg = function(cos) {
    return Math.acos(cos) * 180 / Math.PI;
}

Math.asinDeg = function(sin) {
    return Math.asin(sin) * 180 / Math.PI;
}

Rectangle2.prototype.hasCollided = function(pointA) {
    let pointO = new Point2(this.position.x, this.position.y);
    if (this.rotation == 0) {
        return handleCollision(this, { x: pointA.x - pointO.x, y: pointA.y - pointO.y });
    }
    let angleAlpha = this.rotation * 180 / Math.PI;
    console.log('Alpha=' + angleAlpha);
    // A in new Oxy
    let newPointA = new Point2(pointA.x - pointO.x, pointA.y - pointO.y);
    console.log(`A=(${pointA.x};${pointA.y})`);
    // Radius R = OA
    let OA = handle(pointA, pointO);
    console.log('R=' + OA);
    let angleBeta = Math.acosDeg(newPointA.x / OA);
    console.log('Beta=' + angleBeta);
    // Angle: Phi = Beta + Alpha
    let anglePhi
    if (newPointA.y > 0) {
        anglePhi = angleBeta + angleAlpha;
    } else {
        anglePhi = angleBeta - angleAlpha;
    }
    console.log('Phi=' + anglePhi);
    // A' in new Oxy
    let newPointAQuote = new Point2(Math.cosDeg(anglePhi) * OA, Math.sinDeg(anglePhi) * OA);
    console.log(`A'=(${newPointAQuote.x};${newPointAQuote.y})`);
    return handleCollision(this, newPointAQuote);
}


let r = new Rectangle2((45 * (Math.PI / 180.0)), 4, 6, new Point2(2, 3));
p = new Point2(-1, 2.5);
console.log(r.hasCollided(p));
console.log(Math.cosDeg(170.53767779197446 - 45) * 3.0413812651491092);




// let r = new Rectangle2(0, 10, 8, new Point2(1, 1));
// let p = new Point2(-6, -6);
// console.log(r.hasCollided(p));
// console.log(Math.cosDeg(225) * 3);

// console.log(360 - Math.acos(-2.121320343559643 / 3) * 180 / Math.PI);
// console.log(Math.acosDeg(-2.121320343559643, 3));





// https://www.codewars.com/kata/5bc2c578a10a5b0b97000063/train/javascript

// Rectangle2.prototype.hasCollided = function(pointA) {
//     pointA.x = Math.abs(pointA.x);
//     pointA.y = Math.abs(pointA.y);
//     let degreeA = this.rotation * 180 / Math.PI;
//     let degreeB = 90 - degreeA;
//     let pointO = new Point2(this.position.x, this.position.y);
//     let newPointA;
//     if (this.rotation == 0) {
//         newPointA = new Point2(Math.abs(pointA.x - pointO.x), Math.abs(pointA.y - pointO.y));
//         return handleCollision(this, newPointA);
//     }
//     // find A in new Oxy
//     if (pointA.x == pointO.x && pointA.y == pointO.y) {
//         return true;
//     } else if (pointA.x == pointO.x && pointA.y !== pointO.y) {
//         // A' === O
//         let AO = handle(pointA, pointO);
//         newPointA = new Point2(Math.cos(degreeB) * AO, Math.sin(degreeB) * AO);
//     } else if (pointA.x !== pointO.x && pointA.y == pointO.y) {
//         // A' === A
//         let AO = handle(pointA, pointO);
//         newPointA = new Point2(Math.cos(degreeA) * AO, Math.sin(degreeA) * AO);
//     } else {
//         // A' in old Oxy
//         let pointAQuote = new Point2(pointA.x, pointO.y);
//         let OAQuote = handle(pointAQuote, pointO);
//         // A' in new Oxy
//         let pointNewAQuote = new Point2(Math.cos(degreeA) * OAQuote, Math.sin(degreeA) * OAQuote);
//         // AA'
//         let AAQuote = handle(pointA, pointNewAQuote);
//         if ((pointA.x > pointO.x && pointA.y < pointO.y) || (pointA.x < pointO.x && pointA.y > pointO.y)) {
//             newPointA = new Point2(pointNewAQuote.x + Math.cos(degreeA) * AAQuote, pointNewAQuote.y - Math.sin(degreeA) * AAQuote);
//         } else if ((pointA.x > pointO.x && pointA.y > pointO.y) || (pointA.x < pointO.x && pointA.y < pointO.y)) {
//             newPointA = new Point2(pointNewAQuote.x - Math.cos(degreeB) * AAQuote, pointNewAQuote.y + Math.sin(degreeB) * AAQuote);
//         }
//     }
//     return handleCollision(this, newPointA);
// }

// Rectangle2.prototype.hasCollided = function(pointA) {
//     let degreeA = this.rotation * 180 / Math.PI;
//     let degreeB = 90 - degreeA;
//     let pointO = new Point2(this.position.x, this.position.y);
//     let newPointA;
//     if (this.rotation == 0) {
//         console.log('case 0');
//         newPointA = new Point2(Math.abs(pointA.x - pointO.x), Math.abs(pointA.y - pointO.y));
//         return handleCollision(this, newPointA);
//     }
//     // find A in new Oxy
//     if (pointA.x == pointO.x && pointA.y == pointO.y) {
//         console.log('case 1', 'A=' + PointA.toString(), `O=(${this.widthX/2}, ${this.widthY/2})`);
//         return true;
//     } else if (pointA.x == pointO.x && pointA.y !== pointO.y) {
//         // A' === O
//         let AO = handle(pointA, pointO);
//         newPointA = new Point2(Math.cos(degreeB) * AO, Math.sin(degreeB) * AO);
//         console.log('case 2', 'A=' + newPointA.toString(), `O=(${this.widthX/2}, ${this.widthY/2})`);
//     } else if (pointA.x !== pointO.x && pointA.y == pointO.y) {
//         // A' === A
//         let AO = handle(pointA, pointO);
//         newPointA = new Point2(Math.cos(degreeA) * AO, Math.sin(degreeA) * AO);
//         console.log('case 3', 'A=' + newPointA.toString(), `O=(${this.widthX/2}, ${this.widthY/2})`);
//     } else {
//         // A' in old Oxy
//         let pointAQuote = new Point2(pointA.x, pointO.y);
//         let OAQuote = handle(pointAQuote, pointO);
//         // A' in new Oxy
//         let pointNewAQuote = new Point2(Math.cos(degreeA) * OAQuote, Math.sin(degreeA) * OAQuote);
//         // AA'
//         let AAQuote = handle(pointA, pointNewAQuote);
//         if ((pointA.x > pointO.x && pointA.y < pointO.y) || (pointA.x < pointO.x && pointA.y > pointO.y)) {
//             newPointA = new Point2(pointNewAQuote.x + Math.cos(degreeA) * AAQuote, pointNewAQuote.y - Math.sin(degreeA) * AAQuote);
//             console.log('case 4', 'A=' + newPointA.toString(), `O=(${this.widthX/2}, ${this.widthY/2})`);
//         } else if ((pointA.x > pointO.x && pointA.y > pointO.y) || (pointA.x < pointO.x && pointA.y < pointO.y)) {
//             newPointA = new Point2(pointNewAQuote.x - Math.cos(degreeB) * AAQuote, pointNewAQuote.y + Math.sin(degreeB) * AAQuote);
//             console.log('case 5', 'A=' + newPointA.toString(), `O=(${this.widthX/2}, ${this.widthY/2})`);
//         }
//     }
//     return handleCollision(this, newPointA);
// }
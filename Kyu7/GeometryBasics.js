function distanceBetweenCircles(a, b) {
    let distanceCenter = Math.sqrt((a.center.x - b.center.x) ** 2 + (a.center.y - b.center.y) ** 2);
    return distanceCenter > a.radius + b.radius ? distanceCenter - (a.radius + b.radius) : 0;
}

console.log(Math.sqrt(3 ** 2 + 4 ** 2), 3 ** 2);

// https://www.codewars.com/kata/58e3031ce265671f6a000542/train/javascript
let number = 3;
let power = 2;

function numberToPower(number, power) {
    return power ? Array(power).fill(number).reduce((multiply, e) => e * multiply) : 1;
}

console.log(numberToPower(number, power));

// https://www.codewars.com/kata/562926c855ca9fdc4800005b/train/javascript
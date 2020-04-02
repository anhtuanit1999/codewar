let min = 0,
    max = 10,
    step = 2;

function generateRange(min, max, step) {
    return Array.from({ length: Math.floor((max - min) / step) + 1 }, (e, index) => index * step + min);
}

console.log(generateRange(min, max, step));

// https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript
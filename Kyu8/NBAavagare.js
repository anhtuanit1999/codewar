const { ppg, mpg } = { ppg: 10, mpg: 10 };

function pointsPer48(ppg, mpg) {
    return ppg && mpg ? +(ppg / mpg * 48).toFixed(1) : 0;
}

console.log(pointsPer48(ppg, mpg));

// https://www.codewars.com/kata/587c2d08bb65b5e8040004fd/train/javascript
function iterPi(epsilon) {
    let sum = 0,
        count = 0,
        show = '';
    while (Math.abs(Math.PI - 4 * sum) > epsilon) {
        sum += Math.pow(-1.0, count) / (count * 2 + 1);
        show += `${Math.pow(-1, count)}/${count*2+1} `;
        count++;
    }
    console.log(show);

    return [count, +(sum * 4).toPrecision(11)];
}

console.log(iterPi(0.1));

// https://www.codewars.com/kata/550527b108b86f700000073f/train/javascript
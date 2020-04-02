let str = 'Hi! Hi!';

function remove(s) {
    return s.replace(/\!+$/g, '');
}

console.log(remove(str));

// https://www.codewars.com/kata/57faece99610ced690000165/train/javascript
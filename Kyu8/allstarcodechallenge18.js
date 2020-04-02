let str = 'hello';
let test = 'l';

function strCount(str, letter) {
    let regex = str.match(new RegExp(letter, 'g'));
    return regex ? regex.length : 0;
}
let regex = new RegExp(test, 'g');
console.log(strCount(str, '0'));

// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
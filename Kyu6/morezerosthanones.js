let str = null;

function handleToBinary(str) {
    return str.split('').map((e) => e.charCodeAt(0).toString(2));
}

function handleToBinary(str) {
    return str.split('').map((e) => e.charCodeAt(0).toString(2));
}

function handleCompare(str) {
    return str.match(/[0]/g) ? str.match(/[0]/g).length > 3 : str.match(/[1]/g).length <= 3;
}

function moreZeros(s) {
    let outputArr = handleToBinary(s).filter((e) => handleCompare(e)).map(e => {
        return String.fromCharCode(parseInt(e, 2));
    }).join('').match(/[^1-9]/g);
    // return outputArr;
    return [...new Set(outputArr)];
}

// console.log(handleToBinary(str));
console.log(moreZeros(str));

// https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/javascript

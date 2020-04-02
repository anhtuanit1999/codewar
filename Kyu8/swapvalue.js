let arr = [1, 2];

function swapValues(args) {
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}
swapValues(arr);
console.log(arr[0]);

// https://www.codewars.com/kata/5388f0e00b24c5635e000fc6/train/javascript
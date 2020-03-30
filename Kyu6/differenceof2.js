const arr = [1, 2, 3, 4];

function twosDifference(input) {
    let newArr = input.sort((a, b) => a - b);
    let mapArr = Array.from(newArr, (e) => [e, 0]);
    let outputArr = Array.from(mapArr, (e, index) => {
        let len = newArr.length;
        for (let i = 0; i < len; i++) {
            if (e[0] + 2 === newArr[i]) {
                e.pop();
                e.push(newArr[i]);
                newArr.splice(i, 1);
                return e;
            }
        }
    });
    return outputArr.filter((val) => val !== undefined);
}

console.log(twosDifference(arr));

// https://www.codewars.com/kata/5340298112fa30e786000688/solutions/javascript
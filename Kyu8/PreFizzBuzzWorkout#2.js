function preFizz(n) {
    if (n % 3 == 0 && n % 5 == 0) {
        return 'FizzBuzz';
    } else if (n % 3 == 0) {
        return 'Fizz';
    } else if (n % 5 == 0) {
        return 'Buzz';
    }
    return n;
}

// https://www.codewars.com/kata/569e562b1eed93910f000052/train/javascript
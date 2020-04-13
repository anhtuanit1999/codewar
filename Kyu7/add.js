function add(str1, str2) {
    let len = str1.length > str2.length ? str1.length : str2.length;
    let reverseSrt1 = str1.split('').reverse();
    let reverseSrt2 = str2.split('').reverse();
    let result = '',
        du = 0;
    for (let i = 0; i < len; i++) {
        let a = +reverseSrt1[i] || 0;
        let b = +reverseSrt2[i] || 0;
        result = (a + b + du) % 10 + result;
        du = Math.floor((a + b + du) / 10);
    }
    du > 0 ? result = du + result : 0;
    return result;
}
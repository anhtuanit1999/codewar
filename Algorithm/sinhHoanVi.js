let arr = [1, 2, 3, 4];

function hoanVi(x) {
    let n = x.length;
    while (true) {
        console.log(x);
        let k, l;
        for (k = n - 2; k >= 0; k--) {
            if (x[k] < x[k + 1]) break;
        }
        if (k < 0) break;
        for (l = n - 1; l > k; l--) {
            if (x[k] < x[l]) break;
        }
        let temp = x[k];
        x[k] = x[l];
        x[l] = temp;
        for (let i = k + 1, j = n - 1; i < j; i++, j--) {
            let temp = x[i];
            x[i] = x[j];
            x[j] = temp;
        }
    }
}
hoanVi(arr);
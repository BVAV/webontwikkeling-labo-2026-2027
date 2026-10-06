
let arr = [1, 2, 3, 4, 5];

function calcTotal(array: number[]) {
    return array.reduce((acc, n) => acc + n, 0);
}

console.log(calcTotal(arr));
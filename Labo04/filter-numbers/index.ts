

function filterNegative(arr: number[]) {
        let out: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) out.push(arr[i]);
        
    }
    return out;
}

function filterEven(arr: number[]) {
    let out: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if(!(arr[i] & 1)) out.push(arr[i]);
        
    }
    return out;
}

function filter(arr: number[], func: (number: number) => boolean) {
    const out: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if(func(arr[i])) {
            out.push(arr[i]);
        }
        
    }
    return out;
    // return arr.filter(func);    
}



const numbers: number[] = [-4,-4,1,2,3,4,5];
const isNegative = (number: number) => number <= 0;
console.log(filter(numbers, isNegative));

// console.log(filterNegative(numbers)); // -4,-4
// console.log(filterEven(numbers));
const isPositive = (number: number) => number >= 0;
console.log(filter(numbers, isPositive));

const isEven = (number: number) => !(number & 1);
console.log(filter(numbers, isEven));
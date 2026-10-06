interface TestFunction {
    (n: number): boolean
}

const isOdd: TestFunction = (n: number) => !!(n & 1);

console.log(isOdd(5));
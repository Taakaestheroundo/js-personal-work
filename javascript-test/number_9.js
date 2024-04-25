let num1 = 1;
let num2 = 1;

console.log(num1);
console.log(num2);

while (num2 < 100) {
    let nextNum = num1 + num2;
    console.log(nextNum);

    num1 = num2;
    num2 = nextNum;
}
function computeSum(num1, num2) {
    if (num1 === num2) {
        return 3 * (num1 + num2);
    } else {
        return num1 + num2;
    }
}

// similar numbers
let num1 = 5;
let num2 = 5;
let result1 = computeSum(num1, num2);
console.log("Sum of", num1, "and", num2, "is:", result1);

//  Different numbers
num1 = 7;
num2 = 3;
let result2 = computeSum(num1, num2);
console.log("Sum of", num1, "and", num2, "is:", result2);
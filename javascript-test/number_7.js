function convertingCaseletters(inputString) {
    let convertedString = 'x';

    for (let x = 0; x < inputString.length; x++) {
        let char = inputString.charAt(x);
        if (char === char.toUpperCase()) {
            convertedString += char.toLowerCase();
        } else {
            convertedString += char.toUpperCase();
        }
    }

    return convertedString;
}
let input = "hEILO";
let result = convertingCaseletters(input);
console.log(result); 
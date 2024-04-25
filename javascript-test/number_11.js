// write ajavascript function to slipt a string and convert it into an array of words
function splitStringIntoWords(str) {
    
    return str.split(/[ ,.!?;:-]+/);
}
const sentence = "Hello brother, how are you? I'm okay and doing tests,and also reading hard.";
const wordsArray = splitStringIntoWords(sentence);
console.log(wordsArray);
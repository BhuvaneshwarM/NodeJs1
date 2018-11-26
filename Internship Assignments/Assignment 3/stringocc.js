//4.Demonstrate replace all occurrences of a string within a sentence
const string =
  "This is a sample text and  this text is to be scanned and replaced";

console.log(string);

console.log(
  "============After replacing all the instance of the word Text============"
);

console.log(string.replace(/TeXt/ig, "sentence")); //here replace will replace the string in the first argument with the second
//In order to replace all the instance , the regex g is used , g mans global and will replace all the instances over the string

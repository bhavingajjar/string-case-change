# string-case-change
A lightweight JavaScript package for converting strings between different casing styles such as lowercase, uppercase, title case, and sentence case.

## Usage

```javascript
// Importing the class
const stringCaseChange = require('string-case-change');

// Example usage
const myString = "heLlo woRld";

console.log('Lower case: ' + stringCaseChange.toLowerCase(myString));
console.log('Upper case: ' + stringCaseChange.toUpperCase(myString));
console.log('Title case: ' + stringCaseChange.toTitleCase(myString));
console.log('Sentence case: ' + stringCaseChange.toSentenceCase(myString));
console.log('Camel case: ' + stringCaseChange.toCamelCase(myString));
console.log('Snake case: ' + stringCaseChange.toSnakeCase(myString));
console.log('Kebab case: ' + stringCaseChange.toKebabCase(myString));
console.log('Pascal case: ' + stringCaseChange.toPascalCase(myString));

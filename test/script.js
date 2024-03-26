// test/script.js
// Importing the class
const stringCaseChange = require('string-case-change');

// Example usage
const myString = "heLlo woRld";

console.log('Lower case: ' + stringCaseChange.toLowerCase(myString)); // Lower case: hello world
console.log('Upper case: ' + stringCaseChange.toUpperCase(myString)); // Upper case: HELLO WORLD
console.log('Title case: ' + stringCaseChange.toTitleCase(myString)); // Title case: Hello World
console.log('Sentence case: ' + stringCaseChange.toSentenceCase(myString)); // Sentence case: Hello world
console.log('Camel case: ' + stringCaseChange.toCamelCase(myString)); // Camel case: helloWorld
console.log('Snake case: ' + stringCaseChange.toSnakeCase(myString)); // Snake case: hello_world
console.log('Kebab case: ' + stringCaseChange.toKebabCase(myString)); // Kebab case: hello-world
console.log('Pascal case: ' + stringCaseChange.toPascalCase(myString)); // Pascal case: HelloWorld
console.log('Constant case: ' + stringCaseChange.toConstantCase(myString)); // Constant case: HELLO_WORLD
console.log('Dot case: ' + stringCaseChange.toDotCase(myString)); // Dot case: hello.world
console.log('Path case: ' + stringCaseChange.toPathCase(myString)); // Path case: hello/world
console.log('Alternating case: ' + stringCaseChange.toAlternatingCase(myString)); // Alternating case: HeLlO WoRlD
console.log('Inverted case: ' + stringCaseChange.toInvertedCase(myString)); // Inverted case: HElLO WOrLD
console.log('Sponge case: ' + stringCaseChange.toSpongeCase(myString)); // Sponge case: HeLLo worLD
console.log('Reverse case: ' + stringCaseChange.toReverseCase(myString)); // Reverse case: DLrOW OLlEH
console.log('Small caps case: ' + stringCaseChange.toSmallCaps(myString)); // Small caps case: hello world
console.log('Mirrored case: ' + stringCaseChange.toMirroredCase(myString)); // Mirrored case: plᴚoʍ ol⅂ǝɥ

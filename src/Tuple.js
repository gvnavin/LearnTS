//http://www.typescriptlang.org/docs/handbook/basic-types.html
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
console.log(x);
// Initialize it incorrectly
//x = [10, "hello"]; // Error
console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
x[5] = "world"; // OK, 'string' can be assigned to 'string | number'
console.log(x);
console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'
//x[6] = true; // Error, 'boolean' isn't 'string | number' 
//# sourceMappingURL=Tuple.js.map
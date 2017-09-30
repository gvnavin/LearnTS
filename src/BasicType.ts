//http://www.typescriptlang.org/docs/handbook/basic-types.html

let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(isDone)
console.log(decimal)
console.log(hex)
console.log(binary)
console.log(decimal)
console.log(octal)

let color: string = "blue";
console.log(color)

color = 'red';
console.log(color)

let fullName: string = `Bob Bobbington`;
console.log(fullName)

let age: number = 37;
console.log(age)

let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

console.log(sentence)

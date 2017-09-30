//http://www.typescriptlang.org/docs/handbook/basic-types.html

let someValue: any = "this is a string";

let strLength1: number = (<string>someValue).length;
console.log(strLength1)

let strLength2: number = (someValue as string).length;
console.log(strLength2)
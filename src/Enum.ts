//http://www.typescriptlang.org/docs/handbook/basic-types.html

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

console.log(c)

enum Color2 {Red = 1, Green, Blue}
let c2: Color2 = Color2.Green;

console.log(c2)


enum Color3 {Red = 1, Green = 2, Blue = 4}
let c3: Color3 = Color3.Green;

console.log(c3)

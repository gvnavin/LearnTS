let notSure: any = 4;
console.log(notSure)

notSure = "maybe a string instead";
console.log(notSure)

notSure = false; // okay, definitely a boolean
console.log(notSure)


function warnUser(): void {
    console.log("This is my warning message");
}

warnUser()


let notSure2: any = 4;
//notSure2.ifItExists(); // okay, ifItExists might exist at runtime
let to = notSure2.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
console.log("toFixed:", to)

let prettySure: Object = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
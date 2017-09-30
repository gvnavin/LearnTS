var notSure = 4;
console.log(notSure);
notSure = "maybe a string instead";
console.log(notSure);
notSure = false; // okay, definitely a boolean
console.log(notSure);
function warnUser() {
    console.log("This is my warning message");
}
warnUser();
var notSure2 = 4;
//notSure2.ifItExists(); // okay, ifItExists might exist at runtime
var to = notSure2.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
console.log("toFixed:", to);
var prettySure = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'. 
//# sourceMappingURL=Any.js.map
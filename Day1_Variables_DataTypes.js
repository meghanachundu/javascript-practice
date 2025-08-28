// Day1_Variables_DataTypes.js

// var / let / const
var legacy = "var is function-scoped";  //can be reassigned and redclared
let city = "Guntur";      // can't be redeclared but can be reassigned
const PI = 3.14159;       // can't be redeclared and reassigned

//datatypes
const str = "Hello";
const num = 42;
const big = 12345678901234567890n;
const bool = true;
let notAssigned;          // undefined
const empty = null;       //null
const sym = Symbol("id");

console.log("Types:");
console.log("str →", typeof str);
console.log("num →", typeof num);
console.log("big →", typeof big);
console.log("bool →", typeof bool);
console.log("notAssigned →", typeof notAssigned);
console.log("empty (value) →", empty);
console.log("sym →", typeof sym);

// Template literal
const name = "Meghana";
console.log(`Hi ${name}, welcome to JS!`);


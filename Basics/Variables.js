"use strict";
let txt = "Hello World";
let myNum = 6;
let check = false;
// txt=7.8  //Not Allowed in TypeScript. Thats TS Beauty
console.log(txt);
console.log(myNum);
console.log(check);
// console.log(check+1); //Not Allowed In Ts But Allowed in Js
//any
let hero;
function getHero() {
    return "hero";
}
function getHero2() {
    return false;
}
hero = getHero();
hero = getHero2();
/* hero :is type of any. you can check this by hovering on this variable.
 type any: breaks the law of typescript. variable with type any can eccept any type of data as you see before  */
// explicity declering variable as any
let response;
response = 1213123.5;
console.log(response);
response = false;
console.log(response);
response = "hello world";
console.log(response);

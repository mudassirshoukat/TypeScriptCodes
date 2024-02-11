//error: Parameter 'num' implicitly has an 'any' type.
// function addTwo(num) {
//     return num+2;
// }

//so we need to definded
function addTwo(num: number) {

    return num + 2;
}


console.log(addTwo(4));
console.log(addTwo(4));

function getUpper(str: string) {
    return str.toUpperCase()
}

console.log("Mudassirrr");

//Multiple perameters
function signUp(name: string, email: string, isPaid: boolean) {

}

signUp("Mudassir", "mudassirshoukat7577@gmail.com", true);

function defaultParam(num1: number = 10, num2: number = 5) {
    return num1 + num2;
}
console.log(defaultParam(10, 10));
console.log(defaultParam(10));

// function have return type
function myFunc(n: number): number {
    return n * n;
    // return "abc";   //not allowed
}

let myval: number = myFunc(5);



//In TypeScript, both function and arrow functions (=>) can be used to define functions.
var loginUser2 = function (email: string, password: string, isPaid: boolean) { }
var loginUser = (email: string, password: string, isPaid: boolean) => { }


// return type with arrow func
const getHello = (s: string): string => {
    return `Hello ${s}`;
}
console.log(getHello("Mudassir"));

//optional perameters
function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return "Hello!";
    }
}
console.log(greet());     // Output: Hello!
console.log(greet("John")); // Output: Hello, John!



//Default perameters
function greet2(name: string = "World"): string {
    return `Hello, ${name}!`;
}

console.log(greet2());     // Output: Hello, World!
console.log(greet2("John")); // Output: Hello, John!




//Rest perameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15




// /Function Overloading
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
}
console.log(add(2, 3));    // Output: 5
console.log(add("Hello", "World")); // Output: HelloWorld






//Arrow function 
const multiply = (a: number, b: number): number => a * b;

console.log(multiply(2, 3)); // Output: 6



//Higher-Order Functions:
function withLogging(func: Function): Function {


    return function (...argssss: any[]) {
        console.log(argssss);
        console.log("Calling function...");
        const result = func(...argssss);
        console.log("Function executed.");
        return result;
    };


}

const add2 = (a: number, b: number): number => a + b;
const loggedAdd = withLogging(add2);

console.log(loggedAdd(2, 3)); // Output: Calling function... \n Function executed. \n 5




//behaviour of this in simple function syntax and arrow syntax
class MyClass {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    regularFunction() {
    
        setTimeout(function(this:MyClass) {
            
            console.log("Regular function:", this.name);
        }, 1000);
    }

    arrowFunction() {
        setTimeout(() => {

            console.log("Arrow function:", this.name);
        }, 1000);
    }
}

const obj = new MyClass("Object");
obj.regularFunction(); // Output: Regular function: undefined (this.name is undefined because 'this' refers to the global object inside the regular function)
obj.arrowFunction();   // Output: Arrow function: Object (this.name is correctly captured from the enclosing scope)




//void Function
function logError(errMsg:String):void {
logError(errMsg)
}



// never
// Some functions never return a value:
function fail(msg: string): never {
  throw new Error(msg);
}
// The #never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
// #never also appears when TypeScript determines there’s nothing left in a union.



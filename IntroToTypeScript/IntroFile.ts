// TypeScript allows explicit typing, enhancing code readability and providing better tooling support.
let message: string = "Hello, TypeScript!";

// TypeScript supports interfaces for defining object structures.
interface Person {
    firstName: string;
    lastName: string;
}
console.log(message);

// Using an interface for function parameters enforces a specific structure.
function greet(person: Person): string {
    return `Hello, ${person.firstName} ${person.lastName}!`;
}

// TypeScript catches type-related errors during development.
// Uncommenting the following line will result in a compilation error.
// let invalidNumber: number = "This is a string";

// TypeScript supports classes and access modifiers (public, private, protected).
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public makeSound(): string {
        return "Some generic animal sound";
    }
}

// Inheritance is supported in TypeScript.
class Dog extends Animal {
    public makeSound(): string {
        return "Woof, woof!";
    }
}

// TypeScript allows the use of union types.
let unionType: string | number;
unionType = "This is a string";
unionType = 42;

// TypeScript provides type inference, reducing the need for explicit annotations.
let inferredType = "TypeScript infers this is a string";

// TypeScript supports enums for named constant values.
enum Color {
    Red,
    Green,
    Blue,
}

let myColor: Color = Color.Green;

// TypeScript provides powerful tooling and autocompletion in modern code editors.

// Demonstrate usage:
const personInfo: Person = { firstName: "John", lastName: "Doe" };
console.log(greet(personInfo));

// TypeScript allows for seamless integration with existing JavaScript code.

// Uncommenting the following line is perfectly fine in TypeScript:
// const existingJsVariable = "This is a JavaScript variable";

// The generated JavaScript will not contain TypeScript-specific constructs.

// Compile TypeScript code to JavaScript using the TypeScript compiler:
// tsc IntroFile.ts

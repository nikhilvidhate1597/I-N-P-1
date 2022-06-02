// console.log("working");

// //....1.....Difference between “ == “ and “ === “ operators.

// // == in JavaScript is used for comparing two variables, but it ignores the datatype of variable. === is used for comparing two variables, but this operator also checks datatype and compares two values. Checks the equality of two operands without considering their type.

// // In this article, I am going to demonstrate the difference between =, == and === in javascript. I have chosen a small example to demonstrate the comparision of == and ===. 

// // = is used for assigning values to a variable in JavaScript.
// // == is used for comparison between two variables irrespective of the datatype of variable.
// // === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.
// // Let's take the example of each one by one.

// // Example of =
// var number = 100; // Here number variable assigned using =
// // Example of == 
// if (number == 100) // Here Comparision between two values using ==. It will compare irrespective of datatype of variable
//     alert("Both are equal");
// else
//     alert("Both are not equal");
// // Example of ===

// if (number === 100) // Here Comparision between two values using ===. It will compare strict check means it will check datatype as well.
//     alert("Both are equal");
// else
//     alert("Both are not equal");



// //......2.....What is the spread operator? - The spread operator in JavaScript is a useful syntax for adding elements to an array, combining arrays into one larger one, spreading an array inside the arguments of a function, and more.

// // The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.
// // The spread operator is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expands it into individual elements.
// // The spread operator is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expands it into individual elements.

// const arr1 = ['one', 'two'];
// const arr2 = [...arr1, 'three', 'four', 'five'];

// console.log(arr2);

//....3.... What are the differences between var, let and const?

// In JavaScript, users can declare a variable using 3 keywords that are var, let, and const. In this article, we will see the differences between the var, let, and const keywords. We will discuss the scope and other required concepts about each keyword.

// var keyword in JavaScript: The var is the oldest keyword to declare a variable in JavaScript.

// let a = 10;

// function f() {
//     let b = 9
//     console.log(b);
//     console.log(a);
// }
// f();

// var c = 10;

// function f() {
//     console.log(c)
// }
// f();
// console.log(c);


const value = 10;

function f() {
    a = 9
    console.log(a)
}
f();

//..4...What is execution context - The Execution Context contains the code that's currently running, and everything that aids in its execution. During the Execution Context run-time, the specific code gets parsed by a parser, the variables and functions are stored in memory, executable byte-code gets generated, and the code gets executed.10-F

// let x = 'Hello World!';

// function a() {
//     console.log('It is the first function');

//     function b() {
//         console.log('It is the second function');
//     }
//     b();
// }
// a();
// console.log('It is GEC');

// ....5...What is meant by first class functions
// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.


const math = {
    add: (a, b) => {
        return `${a} + ${b} = ${a + b}`;
    },
    subtract: (a, b) => {
        return `${a} - ${b} = ${a - b}`
    },
    multiply: (a, b) => {
        return `${a} * ${b} = ${a * b}`
    },
    division: (a, b) => {
        if (b != 0) return `${a} / ${b} = ${a / b}`;
        return `Cannot Divide by Zero!!!`;
    }

}

document.write(math.add(100, 100) + "<br>");
document.write(math.subtract(100, 7) + "<br>");
document.write(math.multiply(5, 5) + "<br>");
document.write(math.division(100, 5));



//...6...What are closures? - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function makeFunc() {
    var name = 'Mozilla';

    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
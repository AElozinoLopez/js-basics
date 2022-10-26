// Swapping Variable Exercise
let a = 'red';
let b = 'blue';
console.log(a, b);
b = a;
a = 'blue';
console.log(a, b);

// Logical Operators
// let highIncome = true;
// let goodCreditScore = false;
// let isEligibleForLoan = highIncome && goodCreditScore;
// let isUnderProbation = highIncome || goodCreditScore;

// console.log(isEligibleForLoan);
// console.log(isUnderProbation);


// Ternary Operator
// let point = 90;
// let customerRating = point > 100 ? 'Pass' : 'Fail';
// console.log(customerRating);


// Arithmetic Operators
// let x = 70;
// let y = 50;

// console.log (x - y);
// console.log (x + y);
// console.log (x * y);
// console.log (x / y);
// console.log (x % y);
// console.log (x ** y); 

// Increment and Decrement Operators
// let x = 5;
// console.log(++x);
// console.log(x++);
// console.log(x);
// console.log(--x);
// console.log(x--);
// console.log(x);
// console.log(x +=45);
// console.log(x -=10);
// console.log(x /=4);
// console.log(x > 8);
// console.log(x < 8);
// console.log(x <= 8);
// console.log(x >= 8);
// console.log(x === 8);
// console.log(x !== 8);


//Funtion to calculate the square of a number

// function square(number) {
//     return number * number
// }

// let number = square(6);
// console.log (number);

// Function to calculate the sum of two numbers
// function sumOfTwoNumbers (num1, num2) {
//     console.log(num1 + num2)
// }
// sumOfTwoNumbers(7, 7);


// function greet(name, lastName) {
//     console.log('Hello, ' + name + ' ' + lastName);
// }

// greet('ElozinoLopez', 'ASAIJE');


// function greet(name) {
//     console.log('Hello ' + name);
// }

// greet('elozinoLopez');


// let selectedColors = ['red', 'yellow', 'blue'];
// console.log(selectedColors);
// console.log(selectedColors[1]);
// selectedColors [1] = 30;
// console.log(selectedColors[1]);




// let person = {
//     name: 'Chinwe Elozino', 
//     age: 30
// }
// person.name = "John";
// console.log(person);
// console.log(person.name);
// person['age'] = 35;
// console.log(person);
// let selection = 'name';
// person[selection] = 'Titi';
// console.log(person.name);        


// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// console.log("Hello World");

// alert('Hello Friends');

// let name = "ElozinoLopez"
// console.log(name);






// function showPrimes(limit) {
//     for (let i = 0; i <= limit; i++) {
//         let number = 0;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 number = 1;
//                 break
//             }
//         }
//         if (i > 1 && number === 0) {
//             console.log(i)
//         }
//     }
// } 
// console.log(showPrimes(20));
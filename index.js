// For Loop to print out "Hello World" a number of times
for (let i = 0; i < 1050; i++) {
    console.log('Hello World')
}

//For Loop to display odd numbers between 0 and 10
for (let i = 0; i % 2 > 0; i++) {
    console.log('The odd numbers are ' + );
}

// Switch...case statement
// let role;

// switch (role) {
//     case 'guest' :
//         console.log('Guest User');
//         break;
//     case 'moderator' :
//         console.log('Moderator User');
//         break;
//     case 'admin' :
//         console.log('Admin User');
//         break;
//     default: 
//         console.log('Regular User')
// }



// Program to Print Grade depending on Scores received Using the if...else statement
// let marks = 83;
// if (marks > 90) {
//     console.log('AA');
// } else if (marks > 80 && marks <= 90) {
//     console.log('AB');
// } else if (marks > 70 && marks <= 80) {
//     console.log("BB");
// } else if (marks > 60 && marks <= 70) {
//     console.log('BC');
// } else if (marks > 50 && marks <= 60) {
//     console.log('CC');
// } else if (marks > 40 && marks <= 50) {
//     console.log('CD');
// } else if ( marks > 30 && marks <= 40) {
//     console.log('DD');
// } else {
//     console.log('FF');
// }




// Program to greet visitors depending on hour of the day
// let hour = 19;
// if (hour >= 1 && hour < 12) {
//     console.log('Good morning')
// }
// else if (hour >= 12 && hour < 18) {
//     console.log ('Good afternoon')
// }
// else {
//     console.log('Good evening')
// }


// Program to calculate Simple Interest SI = P * R * T  / 100
// let principal = 500000;
// let rate = 3;
// let time = 1;
// let simpleInterest = (principal * rate * time) / 100;

// console.log('Simple Interest = ' + simpleInterest);



// JS program to compute the area of a circle where Area = Pi * R *R
// const PI = 3.132;
// let Radius = 14;
// let areaOfCircle = PI * Radius**2;
// console.log('Area of circle = ' + areaOfCircle);


// Swapping Variable Exercise
// let a = 'red';
// let b = 'blue';
// console.log(a, b);
// let c = a;
// a = b;
// b = c;
// console.log(a, b);


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
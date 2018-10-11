'use strict';

var numCorrect = 0;

alert('Welcome! Let us play a guessing game so that you can get to know me better!');

var userName = prompt('What is your name?');

alert('Welcome ' + userName + '! How about we get started!');

// //this is question one
// function questionOne() {
//     var answerOne = prompt('Do I have more than one child?').toLowerCase();

//     if (answerOne === 'no' || answerOne === 'n'){
//         alert('You got it right! I only have one little girl!');
//         numCorrect ++;
//         console.log('The user got Question One correct!');
//     } else {
//         alert('Nope you are wrong, I only have one child');
//         console.log('The user got Question One wrong');
//     }
// }
// questionOne();

//this is question two
function questionTwo() {
    var answerTwo = prompt('Is my favorite animal a cow?').toLowerCase();

    if(answerTwo === 'yes' || answerTwo === 'y'){
        alert('Yay you got it right! I absolutely LOVE cows!!');
        numCorrect ++;
        console.log('The user got Question Two right');
    } else {
        alert('No thats definitely not right');
        console.log('The user got Question Two wrong');
    }
    }
questionTwo();

// //this is question three
// var answerThree = prompt('Is my favorite food group chocolate?').toLowerCase();

// if(answerThree === 'yes' || answerThree === 'y'){
//     alert('Oh my gosh is that ever true!!');
//     numCorrect ++;
//     console.log('The user got Question three right');
// } else {
//     alert('Sorry but I actually need chocolate like I need air to breathe!');
//     console.log('The user got Question three wrong');
// }

// //this is question four 
// var answerFour = prompt('Would I rather stay inside rather than outside?').toLowerCase();

// if(answerFour === 'no' || answerFour === 'n'){
//     alert('That is right! I love doing just about anything outside!');
//     numCorrect ++;
//     console.log('The user got Question four right');
// } else {
//     alert('Actually I love to be outside');
//     console.log('The user got Question four wrong');
// }

// //this is question five
// var answerFive = prompt('Do I enjoy the season Spring?').toLowerCase();

// if(answerFive === 'no' || answerFive === 'n'){
//     alert('Ya, Spring weather is undecisive');
//     numCorrect ++;
//     console.log('The user got Question five right');
// } else {
//     alert('No Spring is weird and I kinda hate it');
//     console.log('The user got Question five wrong');
// }

// //this is question six....oh boy here we go
// var counter = 4;

// while (counter > 0 && answerSix != 2){
//     var answerSix = Number(prompt('How many animals would you think I have?'));
//     console.log(counter);
//     counter --;
// if(answerSix < 2 || answerSix > 2){
//     alert('Nope sorry, how about you guess again!');
//     console.log('The user got Question six wrong');
// } else if(answerSix === 2){
//     alert('How did you know?! I have 2 awesome dogs!');
//     numCorrect ++;
//     console.log('The user got Question six right!');
// } 
// if(counter === 0){ 
//     alert('We will just move on, but I have 2 awesome dogs.');
//     console.log('The user ran out of guesses');
// }
// }

// //this is question seven...I got this!
// var counter = 6;
// var siobhanColors = ['teal', 'gold', 'green', 'blue', 'aqua'];
// var passed = true;
// while (counter > 0 && passed){
//     var answerSeven = prompt('What do you think is one of my favorite colors?').toLowerCase();
//     console.log(counter);
//     // var passed;
//     for(var i = 0; i < siobhanColors.length; i++){
//     if(siobhanColors[i] === answerSeven){
//         alert('You\'re right that is one of my favorite colors!!');
//         passed = false;
//         numCorrect ++;
//         console.log('The user got the Question right');
// }
// }
//     counter --;
// if(counter > 0 && passed) {
//     alert('No I\'m sorry I don\'t actually love that color...');
//     console.log('The user got the Question wrong');
// }
// }
// alert('Thanks for guessing but here are some of my favorite colors: blue, aqua, teal, green, and gold!');

// //this tells the user how many questions they got right and wrong
// alert(userName + ' you got ' + numCorrect + ' out of 7! Thanks for playing!');



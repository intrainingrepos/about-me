'use strict';

alert('Welcome! Let us play a guessing game so that you can get to know me better!');

var userName = prompt('What is your name?');

alert('Welcome ' + userName + '! How about we get started!');

//this is question one
var answerOne = prompt('Do I have more than one child?').toLowerCase();

if (answerOne === 'no' || answerOne === 'n'){
    alert('You got it right! I only have one little girl!');
    console.log('The user got Question One correct!');
}else{
    alert('Nope you are wrong, I only have one child');
    console.log('The user got Question One wrong');
}

//this iis question two
var answerTwo = prompt('Is my favorite animal a cow?').toLowerCase();

if(answerTwo === 'yes' || answerTwo === 'y'){
    alert('Yay you got it right! I absolutely LOVE cows!!');
    console.log('The user got Question Two right');
}else{
    alert('No thats definitely not right');
    console.log('The user got Question Two wrong');
}

//this is question three
var answerThree = prompt('Is my favorite food group chocolate?').toLowerCase();

if(answerThree === 'yes' || answerThree === 'y'){
    alert('Oh my gosh is that ever true!!');
    console.log('The user got Question three right');
}else{
    alert('Sorry but I actually need chocolate like I need air to breathe!');
    console.log('The user got Question three wrong');
}

//this is question four 
var answerFour = prompt('Would I rather stay inside rather than outside?').toLowerCase();

if(answerFour === 'no' || answerFour === 'n'){
    alert('That is right! I love doing just about anything outside!');
    console.log('The user got Question four right');
}else{
    alert('Actually I love to be outside');
    console.log('The user got Question four wrong');
}

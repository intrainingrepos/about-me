'use strict';

alert('Welcome! Let us play a guessing game so that you can get to know me better!');

var userName = prompt('What is your name?');

alert('Welcome ' + userName + '! How about we get started!');

var answerOne = prompt('Do I have more than one child?').toLowerCase();

if (answerOne === 'no' || answerOne === 'n'){
    alert('You got it right! I only have one little girl!');
    console.log('The user got Question One correct!');
}else{
    alert('Nope you are wrong, I only have one child');
    console.log('The user got Question One wrong');
}

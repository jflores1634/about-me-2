'use strict'

alert( 'Hi! I\'m going to ask you a few questions.');

    var usernNameInput = prompt('What is your name?');
    console.log('The user entered:' + usernNameInput);

    var headExplode = prompt('Do you think your head will explode after this week of instruction?');

     if(headExplode === 'yes') {
        alert('Cool beans!');
     } else if (headExplode === 'no') {
        alert('Then you must be cooler than cool beans!');
     } else {
        alert('Please enter yes or no!');
     }

    console.log('The user\'s answer:' + headExplode);

    alert('Hi ' + usernNameInput + ', thank you for visiting my site!');

    var questionTwoAns = prompt('How long have you lived in Washington? Please answer with number and years.');
    console.log('The user\'s answer:' + questionTwoAns);

    alert('Wow! That is a long time ' +  usernNameInput +'!'+ ' Ok, on to the next question.');

    var questionThreeAns = prompt('How many times have you ridden the Sounder train?');
    console.log('The user\'s answer:' + questionThreeAns);

    alert('Not bad! The Sounder train can be a great way to travel!');

    var questionFourAns = prompt('Have you coded before?');
    console.log('The user\'s answer:' + questionFourAns);

    alert('Well alright! So far ' + usernNameInput + ', we have learned that you answered "' + headExplode +
    '" to my first question. You have lived in Washington for ' + questionTwoAns + ' and you have ridden the Sounder train ' +
    questionThreeAns + '! You also answered "' + questionFourAns + '" to my final question! I think I learned a lot about you today!');

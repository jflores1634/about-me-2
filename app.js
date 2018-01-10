'use strict'

alert( 'Hi! I\'m going to ask you a few questions.');

    var usernNameInput = prompt('What is your name?');
    console.log('The user entered:' + usernNameInput);

    var headExplode = prompt('Do you think your head will explode after this week of instruction?');
    console.log(usernNameInput + ' answered:' + headExplode);

     if(headExplode === 'yes' || headExplode === 'Yes' || headExplode === 'YES' || headExplode === 'Y' || headExplode === 'y') {
        alert('Cool beans!');
     } else if (headExplode === 'no' || headExplode === 'No' || headExplode === 'NO' || headExplode === 'n' || headExplode === 'N') {
        alert('Then you must be cooler than cool beans!');
     } else {
        alert('Please enter yes or no!');
     }

    alert('Hi ' + usernNameInput + ', thank you for visiting my site!');

    var questionTwoAns = prompt('How long have you lived in Washington? Please answer with number and years.');
    console.log(usernNameInput + ' answer:' + questionTwoAns);

    alert('Wow! That is a long time ' +  usernNameInput +'!'+ ' Ok, on to the next question.');

    var questionThreeAns = prompt('How many times have you ridden the Sounder train?');
    console.log(usernNameInput + ' answer:' + questionThreeAns);

    alert('Not bad! The Sounder train can be a great way to travel!');

    var questionFourAns = prompt('Have you coded before?');
    console.log(usernNameInput + ' answer:' + questionFourAns);

    var questionFiveAns = prompt('Do you prefer coffee or tea?');
    console.log(usernNameInput + ' answer:' + questionFiveAns);

    alert('Well alright! So far ' + usernNameInput + ', we have learned that you answered "' + headExplode +
    '" to my first question. You have lived in Washington for ' + questionTwoAns + ' and you have ridden the Sounder train ' +
    questionThreeAns + '! You also answered "' + questionFourAns +  'And you prefer ' + questionFiveAns + '. I think I learned a lot about you today! Now you will learn a little about me.');

// var questions = ['what pigment makes red roses red?', 'Which is a pigment of the color blue?','Which international flag uses only the colors of this web page?','What makes the sun yellow?'];
// var answer01 = ['Anthocyanins','Carotenoids','Aurite','Chlorophyll'];
// var answer02 = ['Navy','Royal','Indigo','Klein'];
// var answer03 = ['Ecuador','Chad','Andorra','Columbia'];
// var answer04 = ['Distance from the earth.','Temperature','Plasma','Pudding'];
var correctAnswer = 0;
var wrongAnswer = 0;
var win = 0;
var lose = 0;
var complete = false;
var myQuestions = [{
      id:0,
      question: 'what pigment makes roses red?',
      answer: 'Anthocyanins',
      potentialAnswers: ['Anthocyanins','Carotenoids','Aurite','Chlorophyll']
    },{
      id:1,
      question: 'Which is a pigment of the color blue?',
      answer: 'Indigo',
      potentialAnswers: ['Navy','Royal','Indigo','Klein']
    },{
      id:2,
      question: 'Which international flag uses only the colors of this web page?',
      answer: 'Columbia',
      potentialAnswers: ['Ecuador','Chad','Andorra','Columbia']
    },{
      id:3,
      question: 'What makes the sun yellow?',
      answer: 'Temperature',
      potentialAnswers: ['Distance from the earth.','Temperature','Quantum Foam','Pudding']
  }];
// var x = myQuestions[0].potentialAnswers.([Math.floor(Math.random() * myQuestions[0].potentialAnswers.length)]);
// console.log(x);

$(document).ready(function() {

function getIndex() {
index = 0;
for(var i=0;i< myQuestions.length;i++){
  index=myQuestions[i].id;
  console.log(index);
  }
}

function getQuestion(index) {
  if(index <= 1) {
    if (index == 1) {
      $('#question').text(myQuestions[1].question);
    }
    if (index == 2) {
        $('#question').text(myQuestions[2].question);
    }
    if (index == 3) {
      $('#question').text(myQuestions[3].question);
    }
  }
}

  //this is a test
function question() {
  $('#question').text(myQuestions[0].question);
  $('#question').append(myQuestions[1].question);
  $('#question').append(myQuestions[2].question);
  $('#question').append(myQuestions[3].question);
}
// Get a question from the myQuestions object
function getAnswer() {
  //this is a test
  var answer00 = myQuestions[0].answer;
  console.log(myQuestions[0].answer);
  var answer01 = myQuestions[1].answer;
  console.log(myQuestions[1].answer);
  var answer02 = (myQuestions[2].answer);
  console.log(myQuestions[2].answer);
  var answer03 = myQuestions[3].answer;
  console.log(myQuestions[3].answer);
  // pull the answers from the potentialAnswers array and display them in the <p> tags with the class of answer in the display.  currently, the <p> tags are hardcoded in the dom.  It has been suggested, it would be easier to display randoomly selected potentialAnswers and add them to dynamically generated <p> tages ex: ...html('<p class="answer">potentialAnswers[i]</p>).  ???
}
function evalutateAnswer() {
  // check the selected answer to the acual answer presented in the myQuestions object.  If it is correct win++ if not loss ++. evelautate the number of wins and losses if they are >= 5 the game is over
}
function gameTimer() {
  // set a timeOut function for two events.  One create timer that displays and countdowns from 25 in the timer class.  Evalutate if an answer has been selected within 25 seconds.  If an answer is not selected within 25 seconds loss++
}
function finish() {
  // if(questionsAsked<questions.length) {
    // display correct answers
    // display incorrect answers
  // }
}

$('.start-btn').on('click', function() {
  //this is a text
  console.log('I\'ve been clicked');
  getIndex();
  question();
  getAnswer();
  console.log(index);
  //the main function of the application.  When start is pressed, the functions of above will be selected. gameTimer(), getQuestions, getAnswer, evalutateAnswer().  Should the order be start game on click then all functions held inside the gameTimer?
});



});

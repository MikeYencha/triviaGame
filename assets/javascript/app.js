
var correctAnswer = 0;
var wrongAnswer = 0;
var complete = false;
var currentQuestion = 0;
var myQuestions = [{
      id:0,
      text: 'what pigment makes roses red?',
      answerNum: 0,
      potentialAnswers: ['Anthocyanins','Carotenoids','Aurite','Chlorophyll']
    },{
      id:1,
      text: 'Which is a pigment of the color blue?',
      answerNum: 2,
      potentialAnswers: ['Navy','Royal','Indigo','Klein']
    },{
      id:2,
      text: 'Which international flag uses only the colors of this web page?',
      answerNum: 3,
      potentialAnswers: ['Ecuador','Chad','Andorra','Columbia']
    },{
      id:3,
      text: 'What makes the sun yellow?',
      answerNum: 1,
      potentialAnswers: ['Distance from the earth.','Temperature','Quantum Foam','Pudding']
  }];

$(document).ready(function() {

  function showAnswers(question) {
    question.potentialAnswers.forEach(function(answer, i) {
      var answerDiv = $('<div class="answer">');
      if(question.answerNum === i){
        // this is a correct answer
        answerDiv.click(function() {
          alert('you\'re answer is correct!');
          currentQuestion++;
          correctAnswer++;
          showQuestion(currentQuestion);
        });
      } else {
        // this is an incorrect answer
        answerDiv.click(function() {
          alert('You\'ve selected the wrong answer.');
          currentQuestion++;
          wrongAnswer++;
          showQuestion(currentQuestion);
        });
      }
      // add answer text to div
      answerDiv.text(answer);
      $('#answer').append(answerDiv);
    });
  }

  function showQuestion(i) {
    if(currentQuestion < myQuestions.length) {
      $('#question').text(myQuestions[i].text);
      $('#answer').empty();
      showAnswers(myQuestions[currentQuestion]);
    } else {
      console.log('the quiz is over');
      $('#content01').empty();
      $('#content02').empty();
      var resultsCorrect = $('<p>Correct Answers: ' + correctAnswer + '</p>');
      var resultsWrong = $('<p>Wrong Answers: ' + wrongAnswer + '</p>')
      $('#jumbotron h1').text('You answered:');
      $('#jubotron .header').append(resultsCorrect);
    }
  }

  $('.start-btn').on('click', function() {
    // console.log('I\'ve been clicked');
    // $('.start-btn').addClass('hiden');
    showQuestion(currentQuestion);
    $('.start-btn').addClass('hidden');
  });

});

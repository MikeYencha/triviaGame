var correctAnswer = 0;
var wrongAnswer = 0;
var questions = ['what pigment makes red roses red?', 'Which is a pigment of the color blue?','Which international flag uses only the colors of this web page?','What makes the sun yellow?'];
var answer01 = ['Anthocyanins','Carotenoids','Aurite','Chlorophyll'];
var answer02 = ['Navy','Royal','Indigo','Klein'];
var answer03 = ['Ecuador','Chad','Andorra','Columbia'];
var answer04 = ['Distance from the earth.','Temperature','Plasma','Pudding'];
var win = 0;
var lose = 0;

$(document).ready(function() {

function getQuestion() {
    // console.log(questions[0]);
    // console.log(questions[1]);
    // console.log(questions[2]);
    // console.log(questions[3]);

  }
function getAnswer() {
  console.log(questions[0] + ' ' + answer01[0]);
  console.log(questions[1] + ' ' + answer02[2]);
  console.log(questions[2] + ' ' + answer03[3]);
  console.log(questions[3] + ' ' + answer04[1]);
}


$('.start-btn').on('click', function() {
  console.log('I\'ve been clicked');
  getQuestion();
  getAnswer();
});



});
// var numbers = [1, 2, 3, 4, 5, 6];
// $.each(numbers , function (index, value){
//   console.log(index + ':' + value);
// });

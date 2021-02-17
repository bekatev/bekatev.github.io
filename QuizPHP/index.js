//Counts questions
//If the user clicks "next", it increases, if "back" is clicked it wil decrease
let questionCount = 0;
let username;
//After the quiz is submitted, score will be counted using this parameter
let score = 0;
//Number of choises
const num = 4;
//This array keeps the chosen anwers' numbers
let answerArr = [];
//Question data
const questions = [
    [
        'ველოსიპედის ბორბალი ყოველ 20 წამში, 60 ბრუნს ასრულებს. რისი ტოლია მისი ბრუნვის პერიოდი?',
        ['3 წმ', false],
        ['1/3 წმ', true],
        ['6 წმ', false],
        ['1/6 წმ', false],
    ],
    [
        'საათის წამების ისარი მოძრაობს 6.28 სმ/წმ სიჩქარით. გამოთვალე ისრის სიგრძე.',
        ['60 სმ', true],
        ['20 სმ', false],
        ['40 სმ', false],
        ['35 სმ', false],
    ],
    [
        'რამდენი ჰერცია 120 ბრ/წთ?',
        ['60 ჰც', false],
        ['120 ჰც', false],
        ['4 ჰც', false],
        ['2 ჰც', true],
    ],
    [
        '1 მ სიგრძის თოკზე გამობმული სხეული ბრუნავს ვერტიკალურ სიბრტყეში 3.14 წმ პერიოდით. იპოვეთ რა სიმაღლემდე ავარდება სხეული, თუ თოკს მოწყდა მაშნ, როცა მისი სიჩქარე ვერტიკალურად ზევით იყო მიმართული.',
        ['0.1 მ', false],
        ['0.2 მ', true],
        ['0.4 მ', false],
        ['1 მ', false],
    ],
    [
        'რისი ტოლია ეკვატორზე მყოფი ადამიანის სიჩქარე დედამიწის ცენტრის მიმართ, თუ დედამიწის რადიუსია 6400 კმ? თავისუფალი ვარდნის აჩქარება ჩათვალე 10 მ/წმ^2-ის ტოლად.',
        ['16 კმ/წმ', false],
        ['8 კმ/წმ', true],
        ['4 კმ/წმ', false],
        ['20 კმ/წმ', false],
    ],
    [
        '20 სმ რადიუსის დისკოზე დამაგრებულია 12 სმ რადიუსის დისკო. რისი ტოლია პატარა დისკოს სიხშირე, თუ დიდი დისკოს სიხშირეა 2 ჰც?',
        ['2 ჰც', true],
        ['4 ჰც', false],
        ['3 ჰც', false],
        ['8 ჰც', false],
    ],
    [
        'გამოთვალე 2 მ რადიუსის წრეზე მოძრავი სხეულის ცენტრისკენული აჩარება, თუ მისი სიხშირეა 4 ჰც.',
        ['1435 მ/წმ^2', false],
        ['1342 მ/წმ^2', false],
        ['1155  მ/წმ^2', false],
        ['1262 მ/წმ^2', true],
    ],
    [
        '8?',
        ['meewo', false],
        ['MMMMMM', true],
        ['comooon', false],
        ['BOjnjnj', false],
    ],
    [
        '9?',
        ['TOM', false],
        ['NO', false],
        ['5', false],
        ['MMMMMM', true],
    ],
    [
        '10?',
        ['meewo', false],
        ['MMMMMM', true],
        ['comooon', false],
        ['BOjnjnj', false],
    ],
  ];


  


/*
This function takes questions array and displays needed question along with answers
Using questionCount parameters to guess which questions should be displayed
*/
function setQuestion() {
    let questionNumber = questionCount + 1;
    document.getElementById("question").innerHTML = questions[questionCount][0]
    document.getElementById("questionNum").innerHTML = "შეკითხვა " + questionNumber + " / 10 <br><br>";
    let questionProgress = (questionNumber / questions.length) * 100;
    document.getElementById("question-progress").value = questionProgress;
    document.getElementById("answer1").innerHTML = questions[questionCount][1][0];
    document.getElementById("answer2").innerHTML = questions[questionCount][2][0];
    document.getElementById("answer3").innerHTML = questions[questionCount][3][0];
    document.getElementById("answer4").innerHTML = questions[questionCount][4][0];
    timesUp(); 

}
/*
This function hides the start page and displays questions
*/ 
function startQuiz() {
    let startPage = document.getElementById("start-page");
    let questionPage = document.getElementById("question-page");
    username = document.getElementById("username").value;
    //If the user didn't type her/his name, it won't let her/him to strat the quiz
    if(username.length != 0){
        startPage.style.display = "none";
        questionPage.style.display = "block";
        startTimer();
        setQuestion();
    }
}

/*
This function updates question page
If the question is the last one it will take the user to submit page
*/
function nextQuestion() {
    if(questionCount + 1 < questions.length){
        addScores();
        questionCount++;
        uncheckAll();
        setQuestion();
        checkWhatWasChecked();
    } else {
        let questionPage = document.getElementById("question-page");
        questionPage.style.display = "none";
        let submitPage = document.getElementById("submit-page");
        submitPage.style.display = "block";
    }
}
/*
As radio boxes remember the previous answers, we need to clear all the answers
*/
function uncheckAll(){
    let answer = document.forms[0];
    for (let i = 0; i < num; i++){
        answer[i].checked = false;
    }
}
/*
If the user decides to go back we need to give her/him option to see what he/she checked last time
*/
function checkWhatWasChecked(){
    let answer = document.forms[0];
    let x = answerArr[questionCount];
    if(x < 4){
        answer[x].checked = true;
    } else{
        answer[0].checked = false;
        answer[1].checked = false;
        answer[2].checked = false;
        answer[3].checked = false;
    }
}
/*
This function will take user to the previous question and will include the answer which was already chosen
*/
function prevQuestion() {
    if(questionCount > 0){
        addScores();
        questionCount--;
        setQuestion();
        checkWhatWasChecked();
    } 
}
/*
After the user is asked if he/she wants to submit the answer sheet or not, he/she has the possibility to go back to question page
*/
function noSubmit(){
    let submitPage = document.getElementById("submit-page");
    submitPage.style.display = "none";
    let questionPage = document.getElementById("question-page");
    questionPage.style.display = "block";
    checkWhatWasChecked();
}
/*
If the user decides to submit the answer sheet, she/he won't be able to go back and will just see the score
*/
function submit(){
    addScores();
    countScores();
    let submitPage = document.getElementById("submit-page");
    submitPage.style.display = "none";
    let finalPage = document.getElementById("final-page");
    finalPage.style.display = "block";
    assess(score);
}
/*
This is an easy function, used to find the user's first name
*/
function findFirstName(fullName){
    let space = fullName.search(" ");
    if(space == -1){
        return fullName;
    } else return fullName.substring(0, space);  
}
/*
This functions sets the username and score into invisible form, in order to be used in php later
*/
function addResultToDatabase(){
  let displayScore = score.toString();
  document.getElementById("result-name").value = username;
  document.getElementById("result-score").value = displayScore;
  document.getElementById("result-btn").click();
}




/*
This function assesses the user, using his/her scores
*/
function assess(int){
    addResultToDatabase();
    let name = findFirstName(username);
   // if(int <= 4){
   //     document.getElementById("finalScore").innerHTML = "უკეთესადაც შეგეძლო " + name + "!<br><br>" + "<h5>" + "შენი საბოლოო ქულაა " + "</h5>" + "<br>" + score + "/10";
  //  } else  if(int > 4 && int <= 7){
    //    document.getElementById("finalScore").innerHTML = "კარგი შედეგია " + name + "!<br><br>" + "<h5>" + "შენი საბოლოო ქულაა " + "</h5>" + "<br>" + score + "/10";
   // } else document.getElementById("finalScore").innerHTML = "ძალიან კარგი შედეგია " + name + "!<br><br>" + "<h5>" + "შენი საბოლოო ქულაა " + "</h5>" + "<br>" + score + "/10"; 
   document.getElementById("finalScore").innerHTML = "შენი პასუხი მიღებულია!";
}
  
/*
This function adds the chosen numbers (0,1,2,3), to answerArr array. 
*/
function addScores(){
    let answer = document.forms[0];
    //x is created to check if the user chose any of the options
    let x = 0;
    for (let i = 0; i < num; i++){
        if (answer[i].checked){
            x = 1;
            answerArr[questionCount] = i;
        }
    }
    //If none of the answers were selected answerArr will take random int
    if (x == 0){
        answerArr[questionCount] = 4;
    }
  }
/*
After submiting the answers, answerArr and real answers will be compared to each other to calculate the final score
*/
  function countScores(){
        for (let i = 0; i < answerArr.length; i++){
            let ans = answerArr[i];
            if(ans != 4){
                if (questions[i][ans + 1][1] == true){
                    score++;
                }
            }
        }
  }

/*
Defining needed colors
*/
const FULL_ARRAY = 283;
const ORANGE = 6;
const RED = 3;

const CIRCLE_COLORS = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: ORANGE
  },
  alert: {
    color: "red",
    threshold: RED
  }
};

const TIME_LIMIT = 10;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let chooseColor = CIRCLE_COLORS.info.color;

document.getElementById("timer").innerHTML = `
<div class="timer">
  <svg class="timer-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="timer-circle">
      <circle class="circle-back" cx="50" cy="50" r="45"></circle>
      <path
        id="remaining-path"
        stroke-dasharray="283"
        class="circle-colors ${chooseColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="displayed-timer" class="circle-label">${timeConverter(
    timeLeft
  )}</span>
</div>
`;

/*
When time is up clears the interval
*/
function onTimesUp() {
  clearInterval(timerInterval);
}
/*
This functions start timer
*/
function startTimer() {
  timerInterval = setInterval(() => {
    timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("displayed-timer").innerHTML = timeConverter(timeLeft);
    circleArray();
    giveColor(timeLeft);
    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}
/*
This function is responsible to convert time in mm:ss format
*/
function timeConverter(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}
/*
This function gives the color to the circle at given time
*/
function giveColor(timeLeft) {
  const { alert, warning, info } = CIRCLE_COLORS;
  if (timeLeft <= alert.threshold) {
    document.getElementById("remaining-path").classList.remove(warning.color);
    document.getElementById("remaining-path").classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document.getElementById("remaining-path").classList.remove(info.color);
    document.getElementById("remaining-path").classList.add(warning.color);
  }
}
/*
Calculates fraction between time left and time limit
*/
function calculateFraction() {
  const res = timeLeft / TIME_LIMIT;
  return res - (1 / TIME_LIMIT) * (1 - res);
}
/*
Gives circle color according to array
 */
function circleArray() {
  const circleArray = `${(calculateFraction() * FULL_ARRAY).toFixed(0)} 283`;
  document.getElementById("remaining-path").setAttribute("stroke-dasharray", circleArray);
}
/*
If time is up any button will result in submit the results
*/
function timesUp(){
    if(timeLeft == 0){
        let questionPage = document.getElementById("question-page");
        questionPage.style.display = "none";
        submit(); 
     
    } 
}


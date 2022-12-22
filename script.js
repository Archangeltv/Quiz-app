const quizQuestions = [
  {
    question: "How many states does Nigeria have?",
    a: "90",
    b: "65",
    c: "42",
    d: "36",
    correct: "d",
  },
  {
    question: "Who won the 2022 Fifa World Cup?",
    a: "Mexico",
    b: "Argentina",
    c: "Portugal",
    d: "France",
    correct: "b",
  },

  {
    question: "Who is the GOAT of football?",
    a: "Lionel Messi",
    b: "Cristiano Ronaldo",
    c: "Pele",
    d: "Maradona",
    correct: "a",
  },

  {
    question: "Who is the best youtuber",
    a: "Codemyhobby",
    b: "Travesy Media",
    c: "Freecodecamp",
    d: "Telusko",
    correct: "a",
  },

  {
    question: "Who is Archangel",
    a: "Boy learning to code",
    b: "Olodo Boy",
    c: "Who cares?",
    d: "Get lost MF",
    correct: "a",
  },
];

const answerOpt = document.querySelectorAll(".answer");
const a_text = document.getElementById("opt1");
const questionOpt = document.querySelector(".question");
const input = document.querySelector(".input");
const result = document.querySelector(".result");
const quiz = document.querySelector(".quiz");
const b_text = document.getElementById("opt2");
const c_text = document.getElementById("opt3");
const d_text = document.getElementById("opt4");
const submitBtn = document.getElementById("next");
const count = document.getElementById("score");
let currentQuestion = 0;
let score = 0;
loadQuestion();
disableButton();
function loadQuestion() {
  deselectAnswers();
  const currentQuestionData = quizQuestions[currentQuestion];
  questionOpt.innerText = currentQuestionData.question;
  a_text.innerText = currentQuestionData.a;
  b_text.innerText = currentQuestionData.b;
  c_text.innerText = currentQuestionData.c;
  d_text.innerText = currentQuestionData.d;
}
function deselectAnswers() {
  answerOpt.forEach((answerEL) => (answerEL.checked = false));
}

function getSelectedOpt() {
  let answer;
  answerOpt.forEach((answerEL) => {
    if (answerEL.checked) {
      answer = answerEL.id;
    }
  });
  return answer;
}

function disableButton() {
  submitBtn.disabled = true;
  answerOpt.forEach((inputed) => {
    inputed.onclick = () => {
      submitBtn.disabled = false;
    };
  });
}

// If the selected answer is equal to the current quiz answe, increase score by 1
submitBtn.addEventListener("click", () => {
  submitBtn.disabled = true;
  const answer = getSelectedOpt();
  if (answer) {
    if (answer === quizQuestions[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
      loadQuestion();
    } else {
      count.innerHTML = score;
      result.classList.add("show");
      quiz.classList.add("hide");
    }
  }
});

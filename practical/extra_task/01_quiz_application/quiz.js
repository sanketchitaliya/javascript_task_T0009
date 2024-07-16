const quizData = [
  {
    question: "How many team members are there in each team of a cricket game?",
    answers: [
      { option: "11", correct: true },
      { option: "15", correct: false },
      { option: "10", correct: false },
      { option: "12", correct: false },
    ],
  },
  {
    question: "Which country is the birthplace of cricket game?",
    answers: [
      { option: "Britain", correct: true },
      { option: "India", correct: false },
      { option: "France", correct: false },
      { option: "USA", correct: false },
    ],
  },
  {
    question: "What is the capital of India?",
    answers: [
      { option: "Mumbai", correct: false },
      { option: "Delhi", correct: true },
      { option: "Madhypradesh", correct: false },
      { option: "Ahemdabad", correct: false },
    ],
  },
  {
    question:
      "How many bails and stumps are there in the wicket of a cricket game?",
    answers: [
      { option: "4", correct: false },
      { option: "5", correct: false },
      { option: "3", correct: true },
      { option: "2", correct: false },
    ],
  },
  {
    question: "What is the correct measurement of a pitch in the cricket game",
    answers: [
      { option: "25m", correct: false },
      { option: "30m", correct: false },
      { option: "23m", correct: false },
      { option: "20m", correct: true },
    ],
  },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerOptionsElement = document.getElementById("answer");
const submitButton = document.getElementById("submit");
const scoreElement = document.getElementById("score");
const questionNumElement = document.getElementById("question-num");
const totalQuestions = quizData.length;

function loadQuestion() {
  const currentQuizQuestion = quizData[currentQuestion];
  questionElement.textContent = currentQuizQuestion.question;
  answerOptionsElement.innerHTML = "";

  currentQuizQuestion.answers.forEach((answer, index) => {
    const li = document.createElement("li");
    const radioBtn = document.createElement("input");
    radioBtn.type = "radio";
    radioBtn.id = `option${index}`;
    radioBtn.name = "answer";
    radioBtn.value = answer.correct;
    li.appendChild(radioBtn);

    const label = document.createElement("label");
    label.setAttribute("for", `option${index}`);
    label.textContent = answer.option;
    li.appendChild(label);

    answerOptionsElement.appendChild(li);
  });

  questionNumElement.textContent = currentQuestion + 1;
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    alert("Please select answer");
    return;
  }

  const isCorrect = JSON.parse(selectedOption.value);

  if (isCorrect) {
    score++;
    scoreElement.textContent = score;
  }

  if (currentQuestion < totalQuestions - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionElement.textContent = `Quiz completed! Your score is ${score} out of ${totalQuestions}.`;
  answerOptionsElement.innerHTML = "";
  submitButton.style.display = "none";
  scoreElement.textContent = score;
}

submitButton.addEventListener("click", checkAnswer);

loadQuestion();

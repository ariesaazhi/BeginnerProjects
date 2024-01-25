"use strict";
const quizData = [
  {
    question:
      "A molecular technique in which DNA sequences between two oligonucleotide primers can be amplified is known as",
    a: "polymerase chain reaction",
    b: "northern blotting",
    c: "DNA replication",
    d: "southern blotting",
    correct: "a",
  },
  {
    question: "Agrobacterium tumefaciens is",
    a: "a fungi that is used to produce antibiotics in large amounts",
    b: "a disease in humans that causes loss of weight",
    c: "a bacterium that can be used to introduce DNA into plants",
    d: "a disease in humans that causes loss of sight",
    correct: "c",
  },
  {
    question: "Which of the bacteria is considered for biological leaching?",
    a: "Ferrobacillus terrooxidans",
    b: "all of these",
    c: "T. ferrooxidans",
    d: "T. thiooxidans",
    correct: "b",
  },
  {
    question:
      "During which phase of growth of Penicillium chrysogenum maximum antibiotic production takes place",
    a: "during the first phase",
    b: "during the third phase",
    c: "same in all the phases",
    d: "during the second phase",
    correct: "d",
  },
  {
    question: "Biochips are made up of",
    a: "semi-conducting molecules inserted into the protein framework",
    b: "conducting molecules inserted into the protein framework",
    c: "non-conducting molecules inserted into the protein framework",
    d: "any of the above",
    correct: "a",
  },
];

const quiz = document.querySelector(".quiz-body");
const answerEL = document.querySelectorAll(".answer");
const questionEL = document.getElementById("question");
const quizDetailsEL = document.querySelector(".quiz-details");
const a_txt = document.getElementById("a_text");
const b_txt = document.getElementById("b_text");
const c_txt = document.getElementById("c_text");
const d_txt = document.getElementById("d_text");
const btnSubmit = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;
LoadQuiz();

function LoadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEL.innerText = currentQuizData.question;
  a_txt.innerText = currentQuizData.a;
  b_txt.innerText = currentQuizData.b;
  c_txt.innerText = currentQuizData.c;
  d_txt.innerText = currentQuizData.d;

  quizDetailsEL.innerHTML = `<p>${currentQuiz + 1} of ${
    quizData.length
  } Questions</p>`;
}

// Get selected radio button
function getSelected() {
  let answer;
  answerEL.forEach((answerELs) => {
    if (answerELs.checked) {
      answer = answerELs.id;
    }
  });
  return answer;
}

// Submit button event listener
btnSubmit.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      LoadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} Questions correctly</h2>`;
      // Create a button element
      const reloadButton = document.createElement("button");

      // Set the button type attribute
      reloadButton.type = "button";

      // Set the button text content
      reloadButton.textContent = "Reload";

      // Add an event listener to handle the click event
      reloadButton.addEventListener("click", () => location.reload());

      // Append the button to the quiz container or any desired element
      quiz.appendChild(reloadButton);
      footerEL.style.display = "none";
    }
  }
});

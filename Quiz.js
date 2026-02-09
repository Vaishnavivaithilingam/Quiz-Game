const quizData = [
    {
      question: "Which country is known as the Land of the Rising Sun?",
      choices: ["Japan", "China", "Thailand"],
      correctAnswer: 0
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Venus", "Mars", "Jupiter"],
      correctAnswer: 1
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: ["Leonardo da Vinci", "Michelangelo", "Pablo Picasso"],
      correctAnswer: 0
    },
    {
      question: "What is the largest ocean in the world?",
      choices: ["Antarctic Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: 2
    },
    {
      question: "Who wrote the play Romeo and Juliet?",
      choices: ["Oscar Wilde", "William Shakespeare", "Arthur Miller"],
      correctAnswer: 1
    },
    {
      question: "Who is the CEO of Tesla and spaceX?",
      choices: ["Elon Musk", "Bill Gates", "Mark Zuckerberg"],
      correctAnswer: 0
    },
    {
      question: "What is the capital city France?",
      choices: ["London", "Rome", "paris"],
      correctAnswer: 2
    },
    {
      question: "What is the hardest natural substance on Earth?",
      choices: ["Gold", "Diamond", "Iron"],
      correctAnswer: 1
    },
    {
      question: "Which is the longest river in the world?",
      choices: ["Ganga", "Nile", "Narmadha"],
      correctAnswer: 1
    },
    {
      question: "Who is known as the 'Father of the Indian Constitution'?",
      choices: ["Dr.B.R.Ambedkar", "Jawaharlal Nehru", "Sardar Vallabhai Patel"],
      correctAnswer: 0
    }
  ];
  
  const questionElement = document.querySelector(".question");
  const choicesElements = document.querySelector(".choices");
  const submitButton = document.querySelector(".submitbtn");
  const resultElement = document.querySelector(".result");
  
  let CurrentQuestion = 0;
  let score = 0;
  
  // Load a question
  function loadQuestion() {
    const quiz = quizData[CurrentQuestion];
    questionElement.textContent = quiz.question;
  
    choicesElements.innerHTML = "";
  
    for (let i = 0; i < quiz.choices.length; i++) {
      const choiceElement = document.createElement("li");
      const choiceInput = document.createElement("input");
      const choiceText = document.createElement("span");
  
      choiceInput.type = "radio";
      choiceInput.name = `choice${CurrentQuestion}`;
      choiceInput.value = i;
  
      choiceText.textContent = quiz.choices[i];
  
      choiceElement.appendChild(choiceInput);
      choiceElement.appendChild(choiceText);
      choicesElements.appendChild(choiceElement);
    }
  }
  
  // Check answer and move to next question
  function checkAnswer() {
    const selectedChoice = document.querySelector(
      `input[name="choice${CurrentQuestion}"]:checked`
    );
  
    if (!selectedChoice) return;
  
    const choiceIndex = Number(selectedChoice.value);
  
    if (choiceIndex === quizData[CurrentQuestion].correctAnswer) {
      score++;
    }
  
    CurrentQuestion++;
  
    if (CurrentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  // Show final result
  function showResult() {
    questionElement.style.display = "none";
    choicesElements.style.display = "none";
    submitButton.style.display = "none";
  
    resultElement.innerHTML = `You scored ${score} out of ${quizData.length}!`;
    resultElement.classList.add("show");
  }
  
  submitButton.addEventListener("click", checkAnswer);
  
  // Start quiz
  loadQuestion();
  
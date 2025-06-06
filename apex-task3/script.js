// ----------------- Quiz -----------------
const quiz = [
  {
    question: "What is the capital of France?",
    options: ["Madrid", "Berlin", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "What does JS stand for?",
    options: ["JavaSource", "JavaScript", "JSONScript", "JumpScript"],
    answer: "JavaScript"
  },
  {
    question: "HTML is used for?",
    options: ["Styling", "Structure", "Database", "Hosting"],
    answer: "Structure"
  }
];

let currentQ = 0;
let score = 0;

function loadQuestion() {
  const q = quiz[currentQ];
  document.getElementById("question").textContent = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      if (option === q.answer) score++;
      document.getElementById("score").textContent = `Score: ${score}/${quiz.length}`;
    };
    optionsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  if (currentQ < quiz.length - 1) {
    currentQ++;
    loadQuestion();
  } else {
    document.getElementById("question").textContent = "Quiz Completed!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("score").textContent = `Final Score: ${score}/${quiz.length}`;
  }
}

// ----------------- Carousel -----------------
const images = [
  "https://picsum.photos/id/1011/600/300",
  "https://picsum.photos/id/1025/600/300",
  "https://picsum.photos/id/1041/600/300"
];

let currentImage = 0;

function loadCarousel() {
  document.getElementById("carouselImage").src = images[currentImage];
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  loadCarousel();
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  loadCarousel();
}

// ----------------- Joke API -----------------
async function getJoke() {
  const jokeEl = document.getElementById("joke");
  jokeEl.textContent = "Loading...";
  try {
    const res = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }
    });
    const data = await res.json();
    jokeEl.textContent = data.joke;
  } catch (error) {
    jokeEl.textContent = "Failed to fetch joke.";
  }
}

// ----------------- On Load -----------------
window.onload = () => {
  loadQuestion();
  loadCarousel();
};

let word = [
    "computer",
    "programmation",
    "javascript",
    "developper",
    "interface",
    "index",
    "syntaxe",
    "variable",
    "function",
    "loop"
  ];
  
  let restartBtn = document.getElementById("restartBtn");
    restartBtn.style.display = "none";
    let game = document.querySelector(".game");
    game.style.display = "none";

  // conputer choser random word
  let randomWord = word[Math.floor(Math.random() * word.length)];
  let hidenLetters = randomWord.replace(/[a-z]/gi, "-");
  
  function startGame() {
    let hidenWord = document.getElementById("hidenWord");
    
    hidenWord.innerHTML = hidenLetters;
  }
  
  // The following code is the game content

  let letters = document.getElementById("input");
  let lifeCount = document.getElementById("life");
  let fail = 10;
  const FAIL = 0;
  lifeCount.innerHTML = fail

  document.getElementById("btn").onclick = function() {
    guessLetter();
  };

  function guessLetter() {
    let guess = letters.value.toLowerCase();
    letters.value = "";
  
    if (randomWord.includes(guess)) {
      for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === guess) {
          hidenLetters = hidenLetters.slice(0, i) + guess + hidenLetters.slice(i + 1);
        }
      }
      hidenWord.innerHTML = hidenLetters;
    } else {
      fail--;
      lifeCount.innerHTML = fail;
      let deadLetters = document.getElementById("deadLetters");
      deadLetters.innerHTML += " " + guess;
    }
  
    if (fail === FAIL) {
      // Player lsoe
      document.getElementById("winOrLoose").innerHTML = "You lose! The word was " + randomWord + ".";
    } else if (!hidenLetters.includes("-")) {
      // Player win
      document.getElementById("winOrLoose").innerHTML = "You win! The word was " + randomWord + ".";
    }
  }

  // init the game
  function initGame() {
    let startBtn = document.querySelector(".startGame");
    startBtn.style.display = "none";
    let game = document.querySelector(".game");
    game.style.display = "flex";
    let restartBtn = document.getElementById("restartBtn");
    restartBtn.style.display = "block";
  }

  document.getElementById("btn").onclick = function() {
    guessLetter();
  };
  
  document.getElementById("restartBtn").onclick = function() {
    resetGame();
  };

  function resetGame() {
    randomWord = word[Math.floor(Math.random() * word.length)];
    hidenLetters = randomWord.replace(/[a-z]/gi, "-");
    hidenWord.innerHTML = hidenLetters;
    fail = 8;
    lifeCount.innerHTML = fail;
    let deadLetters = document.getElementById("deadLetters");
    deadLetters.innerHTML = "";
    let winOrLoose = document.getElementById("winOrLoose");
    winOrLoose.innerHTML = "";
    let startBtn = document.querySelector(".startGame");
    startBtn.style.display = "block";
    let game = document.querySelector(".game");
    game.style.display = "none";
    restartBtn.style.display = "none"
  }
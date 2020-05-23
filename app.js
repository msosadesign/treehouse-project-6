const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const btnReset = document.getElementsByClassName("btn__reset")[0];
let missed = 0;
const lives = document.getElementsByClassName("tries");
const overlay = document.getElementById("overlay");
const ulPhrase = phrase.children[0];
const phrases = [
  "Truth was the only daughter of time",
  "I am the one who knocks",
  "Go and change the world",
  "I have a dream",
  "A day without sunshine is night",
];

btnReset.addEventListener("click", () => {
  overlay.style.display = "none";
  // I added this if so I just have to change the text of the button to restart the game
  if (btnReset.textContent === "Restart Game") {
    const keyrow = document.getElementsByClassName("keyrow");
    missed = 0;

    ulPhrase.textContent = "";
    let phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);

    // Loops through all the keyboard keys to remove classes and disabled state
    for (let i = 0; i < keyrow.length; i++) {
      let buttons = keyrow[i].children;
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].removeAttribute("class");
        buttons[j].removeAttribute("disabled");
      }
    }

    // Loops through the hearts to change the image
    for (let i = 0; i < lives.length; i++) {
      let heart = lives[i].children[0];
      heart.src = "images/liveHeart.png";
    }
  }
});

function getRandomPhraseAsArray(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex].split("");
}

function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
    const letter = document.createElement("li");
    letter.textContent = arr[i];

    ulPhrase.appendChild(letter);
    if (letter.textContent != " ") {
      letter.className = "letter";
    }
  }
}

qwerty.addEventListener("click", (e) => {
  const button = e.target;

  function checkLetter(buttonPressed) {
    const letterPressed = buttonPressed.textContent.toUpperCase();
    const letterArr = document.getElementsByClassName("letter");
    let counter = 0;

    for (let i = 0; i < letterArr.length; i++) {
      const currentLetter = letterArr[i].textContent.toUpperCase();
      if (letterPressed === currentLetter) {
        letterArr[i].classList.add("show");
        // The counter simbolizes how many times the letter guessed appears on the phrase
        counter += 1;
      }
    }

    // If the guessed letter doesn't appear anywhere on the phrase (appears 0 times)
    if (counter === 0) {
      return null;
    } else if (counter > 0) {
      const correctLetter = buttonPressed.textContent;
      return correctLetter;
    }
  }

  function checkWin() {
    const letters = document.getElementsByClassName("letter");
    const show = document.getElementsByClassName("show");
    const message = overlay.firstElementChild;

    if (letters.length === show.length) {
      overlay.className = "win";
      message.textContent = "Congratulations, You Won!";
      btnReset.textContent = "Restart Game";
      overlay.style.display = "flex";
    } else if (missed === 5) {
      overlay.className = "lose";
      message.textContent = "Sorry, You Lost";
      btnReset.textContent = "Restart Game";
      overlay.style.display = "flex";
    }
  }

  if (e.target.tagName === "BUTTON") {
    button.className = "chosen";
    button.disabled = "true";
    const letterFound = checkLetter(button);
    if (letterFound === null) {
      let heart = lives[missed].children[0];
      heart.src = "images/lostHeart.png";
      missed += 1;
    }
    checkWin();
  }
});

let phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

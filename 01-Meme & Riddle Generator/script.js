import {
  getRandomData,
  clearAll,
  checkButtonWithId,
  handleClick,
} from "./utils.js";

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    handleClick(btn);
  });
});

export function showMeme() {
  const randomMemeUrl = getRandomData("memes");
  const container = document.querySelector(".meme-content");
  const newImg = document.createElement("img");
  newImg.setAttribute("src", randomMemeUrl);
  clearAll();
  container.appendChild(newImg);
}

export function showJoke() {
  const randomJoke = getRandomData("jokes");

  const jokeContent = document.querySelector(".joke-content");
  const newPara = document.createElement("p");
  newPara.textContent = randomJoke;
  clearAll();
  jokeContent.appendChild(newPara);
}

export function showQuote() {
  const randomQuote = getRandomData("quotes");

  const quoteContainer = document.querySelector(".quote-content");
  const quoteAuthor = document.createElement("h5");
  quoteAuthor.textContent = "Author: " + randomQuote.author;
  const quoteContent = document.createElement("p");
  quoteContent.textContent = '"' + randomQuote.quote + '"';
  clearAll();
  quoteContainer.appendChild(quoteContent);
  quoteContainer.appendChild(quoteAuthor);
}

export function showRiddle() {
  const randomRiddle = getRandomData("riddles");
  const riddleContainer = document.querySelector(".riddle-content");
  const riddleQuestion = document.createElement("p");
  riddleQuestion.textContent = randomRiddle.question;

  const riddleAnswer = document.createElement("p");
  riddleAnswer.textContent = randomRiddle.answer;
  riddleAnswer.setAttribute("id", "riddle-answer");
  clearAll();
  riddleContainer.appendChild(riddleQuestion);
  riddleContainer.appendChild(riddleAnswer);
  riddleAnswer.hidden = true;
}

export function revealAnswer() {
  const riddleContainer = document.querySelector(".riddle-content");
  const riddle = document.querySelector("p");
  const answer = document.querySelector("#riddle-answer");
  if (riddle && answer.hidden) {
    answer.hidden = false;
  }
}

import { data } from "./data.js";
import {
  showMeme,
  showJoke,
  showRiddle,
  showQuote,
  revealAnswer,
} from "./script.js";

export function getRandomData(item) {
  return data[item][rn(data[item].length)];
}

export function clearAll() {
  const memeContainer = document.querySelector(".meme-content");
  const jokeContainer = document.querySelector(".joke-content");
  const quoteContainer = document.querySelector(".quote-content");
  const riddleContainer = document.querySelector(".riddle-content");

  memeContainer.innerHTML = "";
  jokeContainer.innerHTML = "";
  quoteContainer.innerHTML = "";
  riddleContainer.innerHTML = "";
}

export function rn(len) {
  return Math.floor(Math.random() * len);
}

export function checkButtonWithId(btn) {
  const arr = [
    "showMeme",
    "showJoke",
    "showQuote",
    "showRiddle",
    "revealAnswer",
  ];
  const getId = btn.getAttribute("data-id");
  if (arr.includes(getId)) {
    const index = arr.indexOf(getId);
    const foundElement = arr[index];
    return foundElement;
  }
}

export function handleClick(btn) {
  const foundId = checkButtonWithId(btn);
  switch (foundId) {
    case "showMeme":
      showMeme();
      return;

    case "showJoke":
      showJoke();
      return;

    case "showQuote":
      showQuote();
      return;

    case "showRiddle":
      showRiddle();
      return;

    case "revealAnswer":
      revealAnswer();
      return;

    default:
      console.log("Button with specified data-id does not exist.");
      break;
  }
}

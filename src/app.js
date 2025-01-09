import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let number = ["1", "2", "3", "4", "5", "6", "7", "J", "Q", "K"];
let symbol = ["♣", "♠", "♥", "♦"];

window.onload = function randomCard() {
  const randomNumber = Math.floor(Math.random() * number.length);
  const cardNumber = number[randomNumber];

  let aux = document.querySelector(".theMiddle");
  aux.textContent = cardNumber;

  const randomSymbol = Math.floor(Math.random() * symbol.length);
  const cardSymbolBottom = symbol[randomSymbol];
  let auxSymbolBottom = document.querySelector(".bottomRight");
  auxSymbolBottom.textContent = cardSymbolBottom;

  const cardSymbolTop = symbol[randomSymbol];
  let auxSymbolTop = document.querySelector(".topLeft");
  auxSymbolTop.textContent = cardSymbolTop;

  cardstyleTop(symbol[randomSymbol]);
  cardstyleBottom(symbol[randomSymbol]);
};

function cardstyleTop(randomSymbolTop) {
  let card = document.querySelector(".topLeft");
  card.className = "";

  if (randomSymbolTop === "♣") {
    card.classList.add("spade");
  }
  if (randomSymbolTop === "♠") {
    card.classList.add("club");
  }
  if (randomSymbolTop === "♥") {
    card.classList.add("heart");
  } else if (randomSymbolTop === "♦") {
    card.classList.add("diamond");
  }
}

function cardstyleBottom(randomSymbolBottom) {
  let card = document.querySelector(".bottomRight");
  card.className = "";

  if (randomSymbolBottom === "♣") {
    card.classList.add("spadeBottom");
  }
  if (randomSymbolBottom === "♠") {
    card.classList.add("clubBottom");
  }
  if (randomSymbolBottom === "♥") {
    card.classList.add("heartBottom");
  } else if (randomSymbolBottom === "♦") {
    card.classList.add("diamondBottom");
  }
}

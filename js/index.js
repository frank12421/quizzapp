const cardArtikelAnswer = document.querySelector(
  '[data-js="cardArtikelAnswer"]'
);

const cardButtonAnswer = document.querySelector('[data-js="cardButtonAnswer"]');
const cardArticleAnswer = document.querySelector(
  '[data-js="cardArtikelAnswer"]'
);

cardButtonAnswer.addEventListener("click", () => {
  cardArticleAnswer.classList.toggle("card__article__answer-show");
  const myText = cardButtonAnswer.innerText;
  console.log(myText);
  if (myText === "Show Answer") {
    cardButtonAnswer.innerText = "Hide Answer";
  } else {
    cardButtonAnswer.innerText = "Show Answer";
  }
});

// ---- Card Bookmark click Start ------
const bookmarkButtonCard = document.querySelector(
  '[data-js="bookmarkButtonCard"]'
);
const bookmarkButtonSvg = document.querySelector(
  '[data-js="bookmarkButtonSvg"]'
);

bookmarkButtonCard.addEventListener("click", () => {
  bookmarkButtonSvg.classList.toggle("bookmark__button__svg--marked");
});
// ---- Card Bookmark click End ------

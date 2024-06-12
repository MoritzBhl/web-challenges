console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const article = document.createElement("article");
const p = document.createElement("p");
const footer = document.createElement("footer");
const span = document.createElement("span");
const button = document.createElement("button");

article.classList.add("post");
p.classList.add("post__content");
footer.classList.add("post__footer");
span.classList.add("post__username");
button.classList.add("post__button");

p.textContent = "This is my self created article card";
span.textContent = "@MoritzBHL";
button.textContent = "♥ Like";

article.append(p, footer);
footer.append(span, button);
document.body.append(article);

button.addEventListener("click", handleLikeButtonClick);

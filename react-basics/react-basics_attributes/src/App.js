import React from "react";
import "./styles.css";

export default function App() {
  return Card();
}

function Card() {
  return (
    <article className="article">
      <h2 className="article__title">Header</h2>
      <form>
        <label htmlFor="newCard"></label>
        <input id="newCard"></input>
      </form>
      <a className="article__link">Linktext</a>
    </article>
  );
}

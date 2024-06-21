import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>My first React Heading</h1>
      <p>
        If this text is shown it means that i correctly implement my first React
        component.
      </p>
    </article>
  );
}

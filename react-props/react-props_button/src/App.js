import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("Click");
  }
  return (
    <div>
      <Button text="Disabled" disabled />
      <Button text="Click me" onClick={handleClick} />
      <Button text="Submit" color="green" />
    </div>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button disabled={disabled} style={{ color: color }} onClick={onClick}>
      {text}
    </button>
  );
}

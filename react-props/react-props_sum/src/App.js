import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Sum valueA={5} valueB={6} />
      <Sum valueA={7} valueB={6} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return <h1>{sum}</h1>;
}

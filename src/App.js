import React from "react";
import "./styles.css";

function Button({ color, disabled, text, onClick }) {
  return (
    <>
      <button onClick={onClick} disabled={disabled} style={{ color: color }}>
        {text}
      </button>
    </>
  );
}

export default function App() {
  function handleClick() {
    console.log("YOU CLICKED THE BUTTON");
  }
  return <Button text="CLICK ME" color="red" onClick={handleClick} />;
}

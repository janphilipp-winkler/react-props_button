import React from "react";
import "./styles.css";

function Button({ color, disabled, text, onClick }) {
  const buttonStyles = {
    color: disabled ? "grey" : color,
    backgroundColor: disabled ? "lightgrey" : "pink",
    fontWeight: "bold",
    fontSize: "1rem",
    border: "0",
    borderRadius: "5px",
  };

  return (
    <>
      <button onClick={onClick} disabled={disabled} style={buttonStyles}>
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

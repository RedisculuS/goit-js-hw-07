"use strict";

const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const trimmedInput = event.currentTarget.value.trim();
  if (trimmedInput === "") {
    textOutput.textContent = "Anonymous";
  } else {
    textOutput.textContent = trimmedInput;
  }
});

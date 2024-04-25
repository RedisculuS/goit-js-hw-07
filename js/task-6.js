"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.querySelector("#controls");
const createBtn = controlsDiv.querySelector("[data-create]");
const destroyBtn = controlsDiv.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");
const fragment = document.createDocumentFragment();

createBtn.addEventListener("click", () => {
  const amountInput = controlsDiv.querySelector("input");
  const amount = parseInt(amountInput.value);

  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
    amountInput.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.innerHTML = "";
    fragment.appendChild(box);
  }
  boxesDiv.append(fragment);
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

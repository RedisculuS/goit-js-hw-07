"use strict";

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const loginEmail = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  const inputDataObj = {};

  if (loginEmail === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  } else {
    inputDataObj[loginEmail] = password;
    console.log(inputDataObj);
  }

  form.reset();
}

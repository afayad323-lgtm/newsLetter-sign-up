//selectors
let input = document.querySelector("#email");
let subBtn = document.querySelector("button");
let error = document.querySelector(".error");

//subbtn click

subBtn.addEventListener("click", function () {
  //email empty
  if (input.value === "") {
    error.textContent = "Please put your email";
    input.classList.add("error-border");
    return;
  }

  //invalid email
  let validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.value.match(validEmail)) {
    error.textContent = "Please write a valid email!";
    input.classList.add("error-border");
    return;
  }

  //save local storage
  localStorage.setItem("user", input.value);

  //accept and move to another page
  window.location.href = "accept.html";
});

input.addEventListener("focus", function () {
  error.textContent = "";
});

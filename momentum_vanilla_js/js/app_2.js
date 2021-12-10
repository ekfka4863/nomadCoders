// app_2.js


// DOM =====================================================
const nameSection = document.querySelector("#nameSection");
const todoListSection = document.querySelector("#todoListSection");
const timeQuoteWeatherSection = document.querySelector("#timeQuoteWeatherSection");
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#userName");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


// function ================================================
// onLoginSubmit
function onLoginSubmit(e) {
  e.preventDefault();  
  const usernameThatTheUserWrote = loginInput.value; 
  console.log(usernameThatTheUserWrote);
  localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
  paintGreetings(usernameThatTheUserWrote);

  nameSection.classList.add(HIDDEN_CLASSNAME);
  todoListSection.classList.remove(HIDDEN_CLASSNAME);
  timeQuoteWeatherSection.classList.remove(HIDDEN_CLASSNAME);
}

// paintGreetings
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}!`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(e);      // 객체 
  console.log(loginInput.value);   // ekfka4863

  const loginInputValue = loginInput.value;
  localStorage.setItem(USERNAME_KEY, loginInputValue);

  const localStorageUserName = localStorage.getItem(USERNAME_KEY);

  if (localStorageUserName !== null) {
    nameSection.style.display = "none";

  } else {

  }
})


// event =================================================
// 여기부터
// window.addEventListener("load", function(e) {
//   if (usernameThatTheUserWrote === null) {
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("submit", onLoginSubmit);
//   } else {
//     paintGreetings(savedUsername); 
//   }
// });

// loginForm.addEventListener("submit", function(e) {
//   e.preventDefault();
//   const usernameThatTheUserWrote = loginInput.value; 
//   console.log(usernameThatTheUserWrote);   // ok
//   localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
//   console.log(localStorage.getItem(USERNAME_KEY));  // ok

//   if (usernameThatTheUserWrote === null) {
//     // 
//     // loginForm.addEventListener("submit", onLoginSubmit);
//   } else {
//     nameSection.classList.add(HIDDEN_CLASSNAME);
//     todoListSection.classList.remove(HIDDEN_CLASSNAME);
//     timeQuoteWeatherSection.classList.remove(HIDDEN_CLASSNAME);
//     greeting.innerText = `Hello ${username}!`;
//   }

// });




// ==========================================================
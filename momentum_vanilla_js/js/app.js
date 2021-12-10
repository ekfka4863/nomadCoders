// app_3.js

// DOM 
const nameSection = document.querySelector("#nameSection");
const todoListSection = document.querySelector("#todoListSection");
const timeQuoteWeatherSection = document.querySelector("#timeQuoteWeatherSection");
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#userName");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


// function 
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

// console.log(savedUsername);  // null
if (savedUsername === null) {
  // show the form 
  // nameSection.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);

} else {
  // show the greetings
  paintGreetings(savedUsername); 
}



// ----------------------------------
// cf. 
/* localStorage란? 
- localStorage란 브라우저에서 정보를 저장하고 불러오고 삭제하는 
것이 가능한 브라우저가 가지고 있는 작은 database같은 api라는 것이다. 
- 브라우저가 제공하는 웹 스토리지에는 
웹 스토리지(web storage)에는 로컬 스토리지(localStorage)와 세션 스토리지(sessionStorage)가 있다.
로컬 -과 세션 스토리지라는 두 매커니즘의 차이점은 데이터가 어떤 범위 내에서 얼마나 오래 보존되느냐에 있다. 
세션 스토리지는 웹페이지의 세션이 끝날 때 저장된 데이터가 지워지는 반면, 
로컬 스토리지는 웹페  이지의 세션이 끝나더라도 데이터가 지워지지 않는다. 
- 다시, 브라우저에서 같은 웹사이트를 여러 탭이나 창에 띄우면, 여러 개의 세션 스토리지에 데이터가 서로 격리되어 저장되며, 각 탭이나 창이 닫힐 때 저장해 둔 데이터도 함께 소멸합니다. 반면에, 로컬 스토리지의 경우 여러 탭이나 창 간에 데이터가 서로 공유되며 탭이나 창을 닫아도 데이터는 브라우저에 그대로 남아 있다.
- 어떻게 하는지는 아래의 사이트 참조! 
  cf.  https://www.daleseo.com/js-web-storage/
*/

// ----------------------------------

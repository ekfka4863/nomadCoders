// app_2.js

// DOM 
// const loginForm = document.getElementById("loginForm");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
// const loginButton = document.querySelector("#loginForm button");
// const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";



// function 
// function handleLoginBtnClick() {
function onLoginSubmit(e) {
  // console.dir(loginInput);   // object 반환 
  // console.log(loginInput.value);

  // const value = loginInput.value; 
  // if (value === "") {
  //   alert("Please, write your name");
  // } else if (value.length > 15) {
  //   alert("Your name is too long...");
  // } else {
  //   console.log("Hello " + value);
  // }

  // console.log(e);   // 이벤트에 대한 객체 반환 
  e.preventDefault();  // e라는 객체 안에 있는 function 중 하나 -> 기본적으로 일어나는 동작을 막는 역할을 한다   
  // console.log(userName);
  
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value; 
  // console.log(userName);
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function handleLinkClick(e) {  // 여기서 e는 information about the event that just happened라는 점! 그런 방금 일어난 이벤트의 default로 정해진 동작을 prevent하기위해 e.preventDefault(); 를 사용하는 것!
//   e.preventDefault();

//   alert("clicked!!!");
//   console.log(e);    // PointerEvent {isTrusted: true, pointerId: 0, width: 1, height: 1, pressure: 0, …}
// }



// event 
// loginButton.addEventListener("click", handleLoginBtnClick);
loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);




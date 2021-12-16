// index.js

// DOM ==================================
// const $body = document.querySelector("body");
const $h2 = document.querySelector("h2");


// ======================================
// color options 
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// ======================================


// function =============================
// condition: ALL function handlers should be INSIDE of "superEventHandler"!!
const superEventHandler = {
  onMouseEnter: function () {
    $h2.innerText = "The mouse is here!";
    $h2.style.color = colors[0];
  },
  onMouseLeave: function () {
    $h2.innerText = "The mouse is gone!";
    $h2.style.color = colors[1];
  },
  resize: function () {
    $h2.innerText = "You just resized!";
    $h2.style.color = colors[2]; 
  },
  onRightClick: function () {
    $h2.innerText = "That was a right click!";
    $h2.style.color = colors[4];
  }
};

// ======================================
// for a test!
// function onMouseEnter() {
//   $h2.innerText = "The mouse is here!";
//   // console.log(typeof colors[0], colors[0]);  // string
//   $h2.style.color = colors[0];
// } 
// function onMouseLeave () {
//   $h2.innerText = "The mouse is gone!";
//   $h2.style.color = colors[1];
// }
// function resize() {
//   $h2.innerText = "You just resized!";
//   $h2.style.color = colors[2];   
//   // $body.style.backgroundColor = "#ee1";
// }
// function onRightClick() {
//   $h2.innerText = "That was a right click!";
//   $h2.style.color = colors[4];
// }
// ======================================


// event ================================
$h2.addEventListener("mouseenter", superEventHandler.onMouseEnter);
$h2.addEventListener("mouseleave", superEventHandler.onMouseLeave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.onRightClick);
// ======================================



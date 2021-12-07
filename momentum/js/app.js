// 숙제 1: 계산기능이 들어있는 객체 만들기  

const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  multi: function(a, b) {
    return a * b;
  }, 
  div: function(a, b) {
    return a / b;
  },
  pow: function(a, b) {
    return a ** b;
  }
};

calculator.plus(4, 5);     // 9
calculator.minus(20, 7);  // 13
calculator.multi(10, 5);  // 50
calculator.div(600, 5);   // 120
calculator.pow(2, 4);     // 16


console.dir(document);
console.clear();
// ===========================================
// how to grab html element with js 
// console.log(document.getElementById("title"));   // <h1 id="title">Grab me!</h1>
// const title = document.getElementById("title");
// // console.dir(title);  

// title.innerText = "Got you!" ;

// console.log(title.id);        // title
// console.log(title.className); // title_class_name
// console.log(title.);


console.clear();
// ===========================================
const hellos = document.getElementsByClassName("hello");

// console.log(hellos);   
// HTMLCollection(5) [h1.hello, h1.hello, h1.hello, h1.hello, h1.hello]
// -> 유사배열~ 

// 정리 
// - getElementsByClassName() : 많은 element를 가져올때 씀(array를 반환)
// - getElementsByTagName() : name을 할당할 수 있음(array를 반환)
// - querySelector : element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
// 단 하나의 element를 return해줌
// ⇒ hello란 class 내부에 있는 h1을 가지고 올 수 있다(id도 가능함)
// - 첫번째 element만 가져옴
// - 조건에 맞는 세개 다 가져오고 싶으면 querySelectorAll
// ⇒ 세개의 h1이 들어있는 array를 가져다 줌
// - querySelector("#hello); 와 getElementById("hello"); 는 같은 일을 하는 것임
// 하지만 후자는 하위요소 가져오는 것을 못하므로 전자만 쓸거다


// const title = document.querySelector(".hello h1");
// console.log(title);     // <h1>Grab me 1!</h1>
// console.log(title.textContent); // Grab me 1!

// const titles = document.querySelectorAll(".hello h1");
// console.log(titles);   // NodeList(3) [h1, h1, h1]

console.clear();
// ===========================================
const title = document.querySelector("div.hello:first-child h1");
title.innerText = "Hello";


// click event
function handleTitleClick() {
  // console.log("title was clicked!");
  title.innerText = "Mouse clicked!";
  title.style.color = "#259";
}
title.addEventListener("click", handleTitleClick);

// mouseenter event
function handleTitleMouseEnter() {
  title.innerText = "Mouse is here!";
}
title.addEventListener("mouseenter", handleTitleMouseEnter);


// mouseleave event
function handleTitleMouseLeave() {
  title.innerText = "Mouse is gone!";
}
title.addEventListener("mouseleave", handleTitleMouseLeave);


// 내가 혼자 연습한거... 
// title.addEventListener("mouseover", function(e) {
//   e.preventDefault();

//   title.style.color = "#259";

//   setTimeout(function() {
//     e.target.style.color = "";
//   }, 500);
// });



console.clear();
// ===========================================
// const h1 = document.querySelector("div.hello:first-child h1");

// resize event
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);


// copy event
function handleWindowCopy() {
  alert("copier!!");
}
window.addEventListener("copy", handleWindowCopy);


// offline event -> wifi 가 연결되었는지 알려주는 이벤트 리스너
function handleWindowOffline() {
  alert("SOS no WIFI");
}
window.addEventListener("offline", handleWindowOffline);


// online event ->  cf. wifi 없앴다가 다시 연결하면 나옴!! 
function handleWindowOnline() {
  alert("WIFI connected. All good!!");
}
window.addEventListener("online", handleWindowOnline);


console.clear();
// ===========================================
// if else 구문 활용해서 ... 
// click event - 응용하기 !! 


// ver1.
// function handleTitleClick() {
//   if (title.style.color === "") {
//     title.innerText = "Mouse clicked!";
//     title.style.color = "#259";
//   } else {
//     title.style.color = "tomato";
//   }
// }

// ver2.
// function handleTitleClick() {
//   const currentColor = title.style.color;
//   let newColor;
  
//   if (currentColor === "") {
//     title.innerText = "Mouse clicked!";
//     newColor = "#259";
//   } else {
//     newColor = "tomato";
//   }
//   title.style.color = newColor;
// }

// ver3.
// function handleTitleClick() {
//   const currentColor = title.style.color;
//   let newColor;
  
//   if (currentColor === "blue") {
//     title.innerText = "Mouse clicked!";
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   title.style.color = newColor;
// }

// ver4.
function handleTitleClick() {
  const clickedClass = "clicked";
  
  // if (title.className === clickedClass) {
  if (title.classList.contains(clickedClass)) {
    // title.className = "";
    title.classList.remove(clickedClass);
  } else {
    // title.className = clickedClass;
    title.classList.add(clickedClass);
  }
};


// ver5.
function handleTitleClick() {
  // const clickedClass = "clicked";

  // TIP: ver4. 에서 적은 5줄의 코드 한 줄로 줄이기! 
  title.classList.toggle("clicked");
};

title.addEventListener("click", handleTitleClick);

// ===========================================


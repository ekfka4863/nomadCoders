// todo.js


// DOM =================================
var toDoForm = document.querySelector("#todo-form");
var toDoList = document.querySelector("#todo-list");
var toDoInput = toDoForm.querySelector("input");

// const newTodoLi = document.createElement("li");
// const newTodoSpan = document.createElement("span");
// const button = document.createElement("button");

// 함수 =================================
// 함수 - paintToDo
function paintToDo(newTodo) {
  const newTodoLi = document.createElement("li");
  const newTodoSpan = document.createElement("span");
  
  newTodoLi.appendChild(newTodoSpan);   // li안에 span넣기 
  newTodoSpan.innerText = newTodo;     
  
  // newTodo 제거 버튼 
  const button = document.createElement("button");
  button.type = "button";
  button.innerText = "✖️";
  newTodoLi.appendChild(button);

  // console.log(newTodoLi);            // test용
  toDoList.appendChild(newTodoLi);
}


// 함수 - handleToDoSubmit
function handleToDoSubmit (event) {
  event.preventDefault();
  
  // console.log(toDoInput.value);    // test용
  const newTodo = toDoInput.value;    // Input 안에 들어갈 내용들을 담는 변수 
  
  toDoInput.value = "";               // input의 내용 엔터 후엔 초기화 

  paintToDo(newTodo);
}


// 함수 - removeLi
// function removeLi(button) {
//   button.preventDefault();

//   // const button = document.createElement("button");

//   console.log(button);
//   var parentLi = button.parentNode;
//   parentLi.remove();
// }





// 이벤트 =================================
toDoForm.addEventListener("submit", handleToDoSubmit);
// button.addEventListener("click", removeLi);
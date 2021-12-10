// todo.js

// DOM =================================
const toDoForm = document.querySelector("#todoForm");
const toDoList = document.querySelector("#todoList");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";
let toDos = [];


// 함수 =================================
// saveTodo
function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


// deleteTodo
function deleteTodo(event) {
  const targetLi = event.target.parentElement;
  // console.log(targetLi.id);
  toDos = toDos.filter(toDo => toDo.id !== parseInt(targetLi.id));  // 지금 클릭한 li의 id와 toDos 배열에 있는 id들과 일치하지 않는 아이들만 toDos에 다시 할당 
  targetLi.remove();
  saveTodo();
}



// paintToDo
function paintToDo(newTodo) {
  const newTodoLi = document.createElement("li");
  const newTodoSpan = document.createElement("span");
  newTodoLi.id = newTodo.id;
  newTodoSpan.innerText = newTodo.text;     
  newTodoLi.appendChild(newTodoSpan);   // li안에 span넣기 
  
  // newTodo 제거 버튼 
  const button = document.createElement("button");
  button.type = "button";
  button.innerText = "✖️";
  newTodoLi.appendChild(button);
  
  toDoList.appendChild(newTodoLi);

  // 버튼 클릭 이벤트 
  button.addEventListener("click", deleteTodo);
}


// handleToDoSubmit
function handleToDoSubmit(event) {
  event.preventDefault();
  
  const newTodo = toDoInput.value;    // Input 안에 들어갈 내용들을 담는 변수 
  toDoInput.value = "";               // input의 내용 엔터 후엔 초기화 
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTodo();
}




// 이벤트 =================================
toDoForm.addEventListener("submit", handleToDoSubmit);
// button.addEventListener("click", removeLi);



// 단, localStorage에 todo가 아직 아무것도 없으면 null 값을 갖을 것...
const savedTodo = localStorage.getItem(TODOS_KEY);

if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  toDos = parsedTodo;
  // parsedTodo.forEach((item) => console.log("this is the turn of", item));
  parsedTodo.forEach(paintToDo);
} 
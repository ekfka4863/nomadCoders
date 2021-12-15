import { useState } from "react";

function Todolist () {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  // console.log(toDos);  // []

  const onChange = (event) => {
    setToDo(event.target.value);
    // console.log(event.target.value);
  }; 
  const onSubmit = (event) => {
    event.preventDefault();

    if (toDo === "") {   // 확인차 넣은 if문 -> 만약 toDo값이 empty하다면 kill the function 해서 아무 작동도 하지 않게... 우리가 원하는 toDo는 빈 문자열이 아니니까! 
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);  // push는 사용할 수 없다. 왜냐면 state는 항상 "새것"이어야 하기 때문!
    setToDo("");   // empty the input
  };
  // console.log(toDos);
  
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit} action="#">
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do ..."
        />
        <button type="submit">Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => 
          <li key={index}>{item}</li>
        )}
      </ul>
    </div>
  );
}

export default Todolist;
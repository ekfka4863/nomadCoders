// import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  // console.log("render!!");   
  // 위의 코드로 콘솔창에서 상태가 바뀔때마다 리렌더링된다는 것을 확인할 수 있다!
  // 하지만 어떨때는 component가 처음 render 될 때만 코드가 실행되고 다른 state 변화에는 실행되지 않길 원할수도 있다! 
  // 그때 사용하는 아이가 바로 useEffect다!
  // 그러고 싶을 때가 언제냐면 ... 
  //   e.g. API를 통해 데이터를 가져올 때 처음 렌더링 할 떄는 API를 가져온다. 
  //        그리고는 상태 변화가 있을때 그 API를 또 가져오고 싶지는 않을 것이다. 

  // 그래서...
  // 우리는 이제 useEffect라는 아이로 어떻게 특정 코드들이 컴포넌트가 처음 렌더링 될 때에만 실행되고 다른떄는 리렌더링 되지 않게 하는지를 알아보겠다! 

  // 사용방법: 
  // useEffect는 두개의 argument를 갖는 함수다. 첫 번째 argument는 딱 한 번만 실행하고 싶은 코드이고, 
  // 두 번째 argument는 배열... 
  // e.g. 
  // console.log("I run all the time...");
  // const iRunOnlyOnce = () => {
  //   console.log("I run only once!!");
  // };
  // useEffect(iRunOnlyOnce, []);   // 최초 한번만 렌더링 되게 하고싶은 코드를 첫 번째 인자로 ... 

  // 그럼 두번쨰 인자는 어케 사용?
  useEffect(() => {
    console.log("I run only once.");   // 이거는 일단 어떤 변화가 생기든 상관없이, 가장 처음 컴포넌트가 렌더링 됐을 때 render된다. 오직 한번만!!! 
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes...");
  }, [keyword]);   // 최초 한번만 렌더링 되게 하고싶은 코드를 첫 번째 인자로 ... 
  // 두번째 argument에 keyword를 넣는 것에 대한 해석:
  //   --> 만약 두번째 인자로 들어가는 배열 [] 에 keyword를 넣으면 keyword가 변화할 때 코드를 실행하고 싶다는 의미이다. 
  //   --> 다시... []안에 keyword를 넣는 것은 keyword가 변화할 떄 첫번째 인자로 들어간 코드를 실행할 거라고 react.js에게 알려주는 것이다.
  //       useEffect 함수에 두번째로 들어가는 argument인 배열 []을 dependencies(deps)라고 한다.
  //       여기서 dependencies는 react.js가 should watch(지켜 보아야/)해야 하는 것들을 의미한다. 만약 dependency가 없는 빈 배열 []이 온다면, 지켜볼 대상이 없기 때문에 only once만 실행된다는 사실을 알 수 있다.  
  useEffect(() => {
    console.log("I run when 'counter' changes...");
  }, [counter]);


  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  // console.log("SEARCH FOR", keyword);
  return (
    <div>
      {/* <h1 className={styles.title}>Welcome back!!!</h1> */}
      {/* <Button text={"Continue"} /> */}
      <input 
        value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}// App()

// ---------------
// 마지막으로 useEffect에 대해 알아야 할 것: cleanup function (-> 자주 사용하는 아이는 아니지만 알고만 있기!)

function Hello() {
  function destroyFn () {
    console.log("destroyed : (");
  }
  function createFn () {
    console.log("created : )");
    return destroyFn;    // useEffect의 첫번째 인자로 들어가는 함수 "내부에서" 리턴되는 함수 -> 이게 바로 cleanup function (cf. 이때, 함수를 호출하는 것이 아니라 함수 자체를 리턴하는것이기 떄문에 함수명 뒤에 (); 필요없음!)
  }
  
  useEffect(createFn, []);

  return <h1>Hello</h1>;
}

function App2() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev); 
  }; 

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick} type="button">{showing ? "Hide" : "Show"}</button>
    </div>  
  );
}// App2 ()



// export default App;
export default App2;

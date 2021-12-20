import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

// const ChildOne = styled.div`
//   background-color: teal;
//   width: 100px;
//   height: 100px;
// `;
// const ChildTwo = styled.div`
//   background-color: tomato;
//   width: 100px;
//   height: 100px;
// `;

/* props: 컴포넌트에 데이터를 보내는 방법
  props를 이용해서 컴포넌트마다 공유하는 코드는 그대로 갖고 가고, 다른 부분만 props로 받아와서 
  따로 적용하는 것이 가능하다. ${} ---> ${() => {}} ---> ${(props) => props.인라인으로넣어준props이름} 
*/ 
const Box = styled.div`
  background-color: ${(props) => props.bgColor};  
  width: 100px;
  height: 100px;
`;

// const Text = styled.span`
//   color: white;
// `;
const Text = styled.h1`
  color: white;
`;

// styled-components를 "확장"하는 방법 
// const Circle = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
//   border-radius: 50px;
// `;
// 물론 위와 같이도 가능하겠지만... 우리는 확장하는 방법을 배워 볼 것!
const Circle = styled(Box)`
  border-radius: 50px;
`;
// 이렇게 Box가 갖고있는 모든 속성을 가져오지만, 동시에 다른 코드를 추가할 수 있게 한다!

// const Btn = styled.button`
//   color: white;
//   background-color: tomato;
//   border: 0;
//   border-radius: 15px;
// `;
// 이때, 만약 버튼 태그가 아니고, 다른 태그를 사용해야 하는 경우라면 ...? 
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;
// 여기서는 똑같이 button 태그를 사용하고... 아래에서 props로 as="" 를 사용한다.
// e.g. <Btn as="a">Log out</Btn> --> 브라우저는 button 태그 대신 a 태그로 해당 컴포넌트를 렌더링 해준다

// styled-components로 attribute 설정하는 방법
const Input = styled.input.attrs({required: true})`
  background-color: tomato;
`;

function App() {
  // return null;
  return (
    // 방법1: inline으로, js코드로 styling 해주는 방법  
    // <div style={{display: "flex"}}>
    //   <div style={{backgroundColor: "teal", width: 100, height: 100}}></div>
    //   <div style={{backgroundColor: "tomato", width: 100, height: 100}}></div>
    // </div>

    // 방법2: styled-components 들을 사용하면 ... 
    <Father>
      {/* <Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Box bgColor="tomato">
        <Text>Bye</Text>
      </Box>
      <Circle bgColor="violet" /> */}

      {/* <Btn>Log in</Btn>
      <Btn as="a" href="/" >Log out</Btn> */}

      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;

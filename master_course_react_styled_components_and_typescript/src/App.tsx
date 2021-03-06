// import styled from "styled-components";

import { useState } from "react";

// const Father = styled.div`
//   display: flex;
// `;

// // const ChildOne = styled.div`
// //   background-color: teal;
// //   width: 100px;
// //   height: 100px;
// // `;
// // const ChildTwo = styled.div`
// //   background-color: tomato;
// //   width: 100px;
// //   height: 100px;
// // `;

// /* props: 컴포넌트에 데이터를 보내는 방법
//   props를 이용해서 컴포넌트마다 공유하는 코드는 그대로 갖고 가고, 다른 부분만 props로 받아와서 
//   따로 적용하는 것이 가능하다. ${} ---> ${() => {}} ---> ${(props) => props.인라인으로넣어준props이름} 
// */ 
// const Box = styled.div`
//   background-color: ${(props) => props.bgColor};  
//   width: 100px;
//   height: 100px;
// `;

// // const Text = styled.span`
// //   color: white;
// // `;
// const Text = styled.h1`
//   color: white;
// `;

// // styled-components를 "확장"하는 방법 
// // const Circle = styled.div`
// //   background-color: ${(props) => props.bgColor};
// //   width: 100px;
// //   height: 100px;
// //   border-radius: 50px;
// // `;
// // 물론 위와 같이도 가능하겠지만... 우리는 확장하는 방법을 배워 볼 것!
// const Circle = styled(Box)`
//   border-radius: 50px;
// `;
// // 이렇게 Box가 갖고있는 모든 속성을 가져오지만, 동시에 다른 코드를 추가할 수 있게 한다!

// // const Btn = styled.button`
// //   color: white;
// //   background-color: tomato;
// //   border: 0;
// //   border-radius: 15px;
// // `;
// // 이때, 만약 버튼 태그가 아니고, 다른 태그를 사용해야 하는 경우라면 ...? 
// const Btn = styled.button`
//   color: white;
//   background-color: tomato;
//   border: 0;
//   border-radius: 15px;
// `;
// // 여기서는 똑같이 button 태그를 사용하고... 아래에서 props로 as="" 를 사용한다.
// // e.g. <Btn as="a">Log out</Btn> --> 브라우저는 button 태그 대신 a 태그로 해당 컴포넌트를 렌더링 해준다

// // styled-components로 attribute 설정하는 방법
// const Input = styled.input.attrs({required: true})`
//   background-color: tomato;
// `;

// function App() {
//   // return null;
//   return (
//     // 방법1: inline으로, js코드로 styling 해주는 방법  
//     // <div style={{display: "flex"}}>
//     //   <div style={{backgroundColor: "teal", width: 100, height: 100}}></div>
//     //   <div style={{backgroundColor: "tomato", width: 100, height: 100}}></div>
//     // </div>

//     // 방법2: styled-components 들을 사용하면 ... 
//     <Father>
//       {/* <Box bgColor="teal">
//         <Text>Hello</Text>
//       </Box>
//       <Box bgColor="tomato">
//         <Text>Bye</Text>
//       </Box>
//       <Circle bgColor="violet" /> */}

//       {/* <Btn>Log in</Btn>
//       <Btn as="a" href="/" >Log out</Btn> */}

//       <Input />
//       <Input />
//       <Input />
//       <Input />
//       <Input />
//     </Father>
//   );
// }

// export default App;


// ===============================\
// #2.4. 강의부터 ... 
// 우리가 styled-components 에서 "애니메이션"을 사용하고 싶으면 keyfra
// import styled, { keyframes } from "styled-components";

// // animation 만들기 
// const rotateAnimation = keyframes`
//   0% {
//     transform: rotate(0deg);
//     border-radius: 0px;
//   } 
//   50% {
//     transform: rotate(360deg);
//     border-radius: 100px;
//   }
//   100% {
//     transform: rotate(0deg);
//     border-radius:  0px;
//   }
// `;

// const Wrapper = styled.div`
//   display: flex;
//   width: 100vw;
//   height: 100vh;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props) => props.theme.backgroundColor};
// `;

// const Emoji = styled.span`
//   font-size: 30px;
// `;


// const Box = styled.div`
//   height:200px;
//   width: 200px;
//   background-color: ${(props) => props.bgColor || "tomato"};
//   /* background-color: tomato; */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   animation: ${rotateAnimation} 3s linear infinite;

//   ${Emoji} {
//     &:hover {
//       font-size: 98px;
//     }
//     &:active {
//       opacity: 0;
//     }
//   }
// `;

// const Title = styled.h1`
//   padding: 0px 100px;
//   color: ${(props) => props.theme.textColor};
// `;

// function App() {
//   return (
//     <Wrapper>
//       <Box>
//       <Emoji as="p">😋</Emoji>
//       </Box>
//       {/* <Emoji>🧐</Emoji> */}
//       {/* <p>이 이모지는 Box 컴포넌트 안에 위치하지 않았기 때문에 아무런 스타일링이 적용되지 않는다</p> */}
//       <Title>Hello</Title>
//       <Box bgColor="teal">
//       <Emoji as="a">😋</Emoji>
//       </Box>
//     </Wrapper>
//   );
// } 

// export default App;


// ===============================\
// #2.7. 강의부터 ... 
// import styled from "styled-components";

// const Title = styled.h1`
//   color: ${(props) => props.theme.textColor};
// `;

// const Wrapper = styled.div`
//   display: flex;
//   height: 100vh;
//   width: 100vw;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props) => props.theme.backgroundColor};
// `;

// function App() {
//   return (
//     <Wrapper>
//       <Title>Hello</Title>
//     </Wrapper>
//   );
// }

// export default App;



// ===============================\
// #3.2. 강의부터 ... 

// // import Circle from "./Circle";

// function App () {
//   const [value, setValue] = useState("");   // username
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     // 여기에서는 'any'라는 타입스크립트의 타입이 들어갈 수 있는데, any 라는 타입스크립트 타입은 '어떤 값도 허용한다는 의미'이다
//     // 그리고 우리는 any라는 타입을 최대한 배제하려고 노력해야한다! 왜냐면 자바스크립트가 보통 이런 식으로 "동적 타입"으로 동작하는거지, 타입스크립트는 그런 용도가 아니니까! 

//     // console.log(event.currentTarget.value);

//     const { currentTarget: {value}, } = event;
//     setValue(value);
//   }; 
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log("hello", value);
//   };

//   return (
//     <div>
//       {/* <Circle bgColor="teal" borderColor="yellow" />
//       <Circle bgColor="tomato" text="i'm here!" /> */}

//       <form onSubmit={onSubmit}>
//         <input 
//           value={value} 
//           onChange={onChange} 
//           type="text" 
//           placeholder="username" 
//         />
//         <button>Log in</button>
//       </form>
//     </div>
//   );
// }

// export default App;


// ===============================\
// #3.6. 강의부터 ... 

import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App () {
  return (
    <Container>
      <H1>protected</H1>
    </Container>
  );
}

export default App;



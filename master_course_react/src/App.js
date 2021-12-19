import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const ChildOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const ChildTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;
// const Text = styled.span`
//   color: white;
// `;
const Text = styled.h1`
  color: white;
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
      <ChildOne>
        <Text>Hello</Text>
      </ChildOne>
      <ChildTwo>
        <Text></Text>
      </ChildTwo>
    </Father>
  );
}

export default App;

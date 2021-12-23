import { useState } from "react";
import styled from "styled-components";

// 인터페이스 - 명시적으로 함수의 인자의 형태/타입을 정의할 수 있다
interface CircleProps {
  bgColor:string;
  borderColor?:string;
  text?: string;
}

interface ContainerProps {
  bgColor:string;
  borderColor:string;
} 

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 4px solid ${(props) => props.borderColor};
  border-radius: 100px;
`;

function Circle ( { bgColor, borderColor, text = "default text" }:CircleProps ) {    // 여기서 비구조할당으로 props.bgColor말고 bgColor만 할 수 있도록 {} 열고 안에 props.를 생략한 property를 넣어준 것! 그리고 해당 프롭스는 위에서 정의한 interface/약속을 준수한다는 의미! 

  // 타입스크립트로 useState의 상태값 타입 정하기 (cf. 단, 사실 useState에서 값의 타입이 변하는 일은 거의 없다. 하지만 이렇게 "맞춤 제작"이 가능하긴 하다는 점!)
  const [value, setValue] = useState<number | string>(0);
  setValue(2);        // 에러 없음 
  setValue("hello");  // 에러 없음
  // setValue(true);     // 에러 발생!!!

  return (
    // <Container bgColor={bgColor} borderColor={borderColor} />

    // cf. ??은 null 병합 연산자와 관련 -> 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.
    <Container bgColor={bgColor} borderColor={borderColor ?? "violet"}>     
      {text}
    </Container>    
  );
}

export default Circle;
---
date: 2021-12-12-Sunday
---

# React 사용 방법 

--- 

## JSX 

> Rules 
- 자기가 만든 컴포넌트는 **함수화**한 뒤, 꼭 대문자로 만들어 준다.    



---

## useState 

> 언제 사용? 
- 컴포넌트에서 상태 변화가 있는 부분을(/만) 업데이트/동적으로 관리할 때 사용 

> 사용 방법 
<!-- https://react.vlpt.us/basic/07-useState.html
https://www.daleseo.com/react-hooks-use-state/ -->


--- 
## prop 

## React.memo

--- 
## create-react-app

- 이전까지는 리액트 어플리케이션을 스크립트를 import 함으로써 만들었다면,        
이제부터는 `create react app`을 사용해서 리액트 어플리케이션을 만드는 
~~아주 좋은~~ 방법을 알아볼 예정이다!!
- 우리가 create react app을 사용하려는 가장 큰 이유는 create react app은 많은 스크립트와,
많은 사전 설정들을 준비해주기 때문이다.         
그래서 create react app을 사용해서 어플리케이션을 만들면 개발 서버에 접근한다든가, 
자동으로 새로고침을 시켜준다든가,
즉각적으로 어플리케이션 안에 CSS를 포함시켜 준다든가 하는 기능들을 설정해서 
사용할 수 있다는 점이 create react app의 가장 큰 장점이라고 할 수 있겠다.  

> 사용 방법 
- cli에서 아래와 같은 명령어를 작성하여 새로운 프로젝트 폴더를 생성한다. 
```
  npx create-react-app [프로젝트 폴더명]
  cd [프로젝트 폴더명]
```
- `code .`로 해당 폴더를 vscode로 열고, `package.json` 파일에서 `"scripts: {}"` 부분으로 이동한다.       
~~해당 부분에서 확인할 수 있는 `"start"`라는 명령어로 스크립트를 실행할 수 있다.~~      
아래의 명령어로 스크립트를 실행한다.        
```
  npm start
```
- 해당 명령어로는 `development server(개발용 서버)`를 만들 수 있고, 자동으로 브라우저를 열것이다.       



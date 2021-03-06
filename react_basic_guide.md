---
date: 2021-12-12-Sunday ~ 2021-12-
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


---

## useEffect
> 언제 사용? 
- React.js는 새로운 정보를 자동적으로 refresh 해준 다는 점에서 편리하다.       
하지만, 때로는 이러한 기능이 불필요할 때가 있다.
- ~~그래서~~ 컴포넌트에서 상태 변화가 있을때마다 모두 리렌더링 되는 것이 아니라, 
최초에 처음 render 될 때만 코드가 실행되길 원하고 다른 state 변화에는 실행되지 않도록 하고 싶을 때 사용하는 아이가 바로 useEffect다.        
~~그러고 싶을 때가 언제냐면 ...       
e.g. API를 통해 데이터를 가져올 때 처음 렌더링 할 떄는 API를 가져온다. 그리고는 상태 변화가 있을때 그 API를 또 가져오고 싶지는 않을 것이다.~~


> 사용 방법 
- useEffect는 두개의 argument를 갖는 함수다.      
첫 번째 argument는 실행시키고자 하는 함수이고,       
두 번째 argument로는 ... 배열 []이 오는데, 배열 안에 React.js가 이벤트를 watch/지켜보게끔 하는 dependency를 넣어줄 수 있다.     
그래서 useEffect의 첫번째 argument로 들어간 코드가 어떤 dependencies에 변화/이벤트가 있을 때 해당 코드를 실행하고 싶은 건지 지정할 수 있다.      
<!-- https://yohanpro.com/posts/react/use-effect -->

<!-- https://velog.io/@mnz/React-useEffect-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0 -->


+ 그러면 .... 
만약...
코드의 특정한 부분만 변화했다고 하면, 원하는 코드들을(/만) 실행할 수 있는 방법은 무엇일까? 


---



> React Router란? 
- 우리가 만약 메인 홈페이지에서 다른 홈페이지의 페이지로 이동하려면 그에 맞는 HTML 파일과 데이터들을 fetch해야만 했다.      
하지만 리액트의 리액트 라우터 돔을 이용하면, 페이지의 이동이 아닌 각각의 페이지에 필요한 컴포넌트들을 불러와 보여주게 된다.    
이는 보다 빠르고 다이나믹하게 페이지의 변화를 줄 수 있고, 페이지의 이동이 아니고 각각의 페이지에 필요한 컴포넌트를 불러와 보여주는 식(cf. SPA, 싱글 페이지 어플리케이션 - e.g. 하나의 index.html을 두고 필요한 컴포넌트들만 변경시켜 각각 개별적으로 사용/업데이트 하여 여러HTML 파일이 필요하지 않아 코드도 짧고 서버도 많은 양의 HTML 파일을 다루지 않아도 되는 형식의 개발 방법)이기 때문에 유저에게 좀 더 편안하고 만족스러운 경험을 줄 수 있다.     
- 설치 방법 및 간략한 사용 예시 [링크](https://ko-de-dev-green.tistory.com/39) 클릭!






// import React from 'react';
// import ReactDOM from 'react-dom';
// import { ThemeProvider } from 'styled-components';
// import App from './App';

// const darkTheme = {
//   textColor: "whitesmoke",
//   backgroundColor: "#111",
// };

// const lightTheme = {
//   textColor: "#111",
//   backgroundColor: "whitesmoke",
// };

// ReactDOM.render(  
//   <React.StrictMode> 
//     <ThemeProvider theme={lightTheme}>
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ===============
// #3.2 강의 부터 .... 
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme, lightTheme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
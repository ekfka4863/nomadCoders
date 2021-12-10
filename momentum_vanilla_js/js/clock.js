// clock.js

const clock = document.querySelector("div#clock");


function getClock() {
  const date = new Date();
  // console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);

  const hour = String(date.getHours()).padStart(2, "0");      // padStart(해당텍스트나숫자의length, "만약길이만큼안길면대체할텍스트");로 위의 if 문을 대체할 수 있다는 사실!! 
  const minute = String(date.getMinutes()).padStart(2, "0");  // 단, padStart는 string을 대상으로 사용할 수 있는 메서드다.
  const second = String(date.getSeconds()).padStart(2, "0");
  let timeAllTogether = `${hour} : ${minute} : ${second}`;

  // if (hour < 10) {
  //   timeAllTogether =  `0${hour} : ${minute} : ${second}`;
  // } else if (minute < 10) {
  //   timeAllTogether =  `${hour} : 0${minute} : ${second}`;
  // } else if (second < 10) {
  //   timeAllTogether =  `${hour} : ${minute} 0: ${second}`;
  // } else {
  //   timeAllTogether;
  // }

  clock.innerText = timeAllTogether;  
}

getClock();
setInterval(getClock, 1000);


/* cf. 
  const date = new Date(); 
  date.getDate();      // 30
  date.getDay();       // 2
  date.getFullYear();  // 2021
  date.getHours();     // 0
  date.getMinutes();   //52
  date.getSeconds();   //12
*/

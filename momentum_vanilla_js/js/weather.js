// weather.js


/* API
- 기본적으로 API는 다른 서버와 이야기할 수 있는 방법
*/

// API key 
const API_KEY = "a06f26fedd93580678cfa6cf333c469d";


// function 
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log("You live in", lat, lon);

  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.5985&lon=126.9783&appid=a06f26fedd93580678cfa6cf333c469d`;
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  // fetch를 사용해서 url을 얻는다 
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      
      // console.log(data.name, data.weather[0].main);
      // const nameVal = data.name;
      // const weatherVal = data.weather[0].main;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`;
      city.innerText = `/ ${data.name}`;
    });
}


function onGeoError() {
  alert("Can't find you. No weather for you.");
}


// geolocation API ================================================
// cf.  https://openweathermap.org/current
// 원본: 
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// 나의 위치와 API key 넣은것:
// api.openweathermap.org/data/2.5/weather?lat=37.5985&lon=126.9783&appid=a06f26fedd93580678cfa6cf333c469d

// 받아낸 API 
// {"coord":{"lon":126.9783,"lat":37.5985},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":280.75,"feels_like":278.72,"temp_min":277.99,"temp_max":281.52,"pressure":1028,"humidity":57},"visibility":10000,"wind":{"speed":3.09,"deg":100},"clouds":{"all":0},"dt":1639037913,"sys":{"type":1,"id":8105,"country":"KR","sunrise":1639002914,"sunset":1639037622},"timezone":32400,"id":1835847,"name":"Seoul","cod":200}


// getCurrentPosition()은 2가지의 인자를 받는다 
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// ===============================================================
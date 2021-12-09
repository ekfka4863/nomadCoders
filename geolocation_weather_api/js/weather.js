// weather.js


// function 
function onGeoOk(position) {
  console.log(position);
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}


// geolocation

// const test = navigator.geolocation.getCurrentPosition();
// console.log(test);

// getCurrentPosition()은 2가지의 인자를 받는다 
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


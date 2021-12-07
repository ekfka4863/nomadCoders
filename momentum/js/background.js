// background.js

const images = [
  "photo_01.jpg",
  "photo_02.jpg",
  "photo_03.jpg",
  "photo_04.jpg",
  "photo_05.jpg"
];


// images 배열의 길이 
let imgLen = images.length; 

// 랜덤으로 뽑아내기 
let randomImg = images[Math.floor(Math.random() * imgLen)];
// console.log(randomImg);

// image for background image 
const bgImage = document.createElement("img");
// bgImage.setAttribute("src", "./img/" + randomImg);
bgImage.src = `../img/${randomImg}`;
// bgImage.setAttribute("alt", randomImg + "이라는 이름의 랜덤 이미지 입니다");
bgImage.alt = `${randomImg}라는 이름의 랜덤 이미지 입니다.`;
// console.log(bgImage);

// 생성된 img 태그 추가하기 
// document.body.appendChild(bgImage);
document.body.append(bgImage);
// document.body.prepend(bgImage);







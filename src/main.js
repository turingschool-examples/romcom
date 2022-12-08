// Create variables targetting the relevant DOM elements here 👇
// Pull up and display a new picture, headline, and tagline everytime we click "Show New Random Cover" button.
// cover, titles, descriptors
// We've provided a few variables below


// var title = document.querySelector('.cover-title')
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomIndex(titles) {
  console.log(titles[Math.floor(Math.random() * titles.length)])
}
function getRandomIndex(covers) {
  console.log(covers[Math.floor(Math.random() * covers.length)])
}

function getRandomIndex(descriptors) {
  console.log(descriptors[Math.floor(Math.random() * descriptors.length)])
}
var currentCover = [
  
]

var title = document.querySelector('.cover-title')
console.log(title)

title.innerText = function getRandomIndex(titles) {
  (titles[Math.floor(Math.random() * titles.length)])
}

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
// var currentCover = [
//   new CurrentCover("./assets/prairie.jpg", "Windswept Hearts", "passion", "pigs")
// ]

function getRandomIndex(title) {

  return title[Math.floor(Math.random() * cover.length)];
}


class Cover {
  constructor(coverImgSrc, title, descriptor1, descriptor2) {
    this.id = Date.now();
    this.cover = coverImgSrc;
    this.title = title;
    this.tagline1 = descriptor1;
    this.tagline2 = descriptor2;
  }
}

<section class="main-cover">
        <img class="cover-image" src="./assets/prairie.jpg">
        <h2 class="cover-title">Windswept Hearts</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">passion</span> and <span class="tagline-2">woe</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png"></img>



// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started

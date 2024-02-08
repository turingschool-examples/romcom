// Create variables targetting the relevant DOM elements here 👇
cover = createCover('./assets/fire.png', 'title', 'title', 'title')

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = document.querySelector('.main-cover');
console.log(currentCover.innerHTML)
currentCover.innerHTML = 
`<img class="cover-image" src="${cover.coverImg}">
<h2 class="cover-title">${cover.title}</h2>
<h3 class="tagline">A tale of <span class="tagline-1">${cover.tagline1}</span> and <span class="tagline-2">${cover.tagline2}</span></h3>
<img class="price-tag" src="./assets/price.png">
<img class="overlay" src="./assets/overlay.png">`

// Create your event handlers and other functions here 👇

function createRandomCover() {
  newCover = []
  newCover[0] = getRandomIndex()

  console.log(coverSeed)
  //createCover(coverSeed[0])

  
}


function randomCoverButton(){

}

// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}




function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = 

// Create variables targetting the relevant DOM elements here 👇
  
  var cover = document.querySelector('.cover-image');
  var titles = document.querySelector('cover-title');
  var tagLine1 = document.querySelector('tagline-1');
  var priceTag = document.querySelector('price-tag') 
  
  var randomCoverButton = document.querySelector('random-cover-button');
  var saveCoverButton = document.querySelector('save-cover-button')
  var makeNewCover = document.querySelector('make-new-button')
  var tagLine2 = document.querySelector('tagline-2')


//Add your event listeners here 👇

var image = document.querySelector('#image)');

image.addEventListener ('click', function() {
  image.src = './assets/fire.png';
});

//Create your event handlers and other functions here 👇


// We've provided one function to get you started
function createBook() {
  titles.innerHTML = function getRandomIndex(titles) {
    return (titles[Math.floor(Math.random() * titles.length)]);  
  }
cover.src = function getRandomIndex(covers) {
  return (covers[Math.floor(Math.random() * covers.length)]);
  }
tagLine1.innerHTML = function getRandomIndex(tagLine1) {
  return (tagLine1[Math.floor(Math.random() * tagLine1.length)]);
}
tagLine2.innerHTML = function getRandomIndex(tagLine2) {
  return (tagLine1[Math.floor(Math.random() * tagLine2.length)]);
}
currentCover = new Cover(cover.src, titles.innerHTML, descriptor1.innerHTML, descriptor2.innerHTML) )
}
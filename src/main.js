// Create variables targetting the relevant DOM elements here 👇
var homeCover = document.getElementsByClassName('cover-image')

var homeTitle = document.getElementsByClassName('cover-title')

var homeTagline1 = document.getElementsByClassName('tagline-1')

var homeTagline2 = document.getElementsByClassName('tagline-2')

var randomButton = document.getElementsByClassName('random-cover-button')
console.log(homeCover)

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
console.log(currentCover)


// Add your event listeners here 👇
// document.getElementById("random-cover-button").addEventListener("click", showCurrentCover)

// Create your event handlers and other functions here 👇
for (var i = 0; i < randomButton.length; i++) {
  randomButton[i].addEventListener("click", showCurrentCover);
}

// show the cover we generated
function showCurrentCover() {
  homeCover.innerHTML = covers[getRandomIndex(covers)]
  homeTitle.outerText = titles[getRandomIndex(titles)]
  homeTagline1.outerText = descriptors[getRandomIndex(descriptors)]
  homeTagline2.outerText = descriptors[getRandomIndex(descriptors)]
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}





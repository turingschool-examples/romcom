var coverRandom 
var titleRandom
var descriptorRandom1
var descriptorRandom2

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


//var currentCover = new Cover();

//document.getElementById("cover-image").src = currentCover.cover;

// Add your event listeners here 👇

var elements = document.getElementsByClassName("random-cover-button")
elements[0].addEventListener('click', randomNumbers)


// Create your event handlers and other functions here 👇
function randomNumbers() {
    coverRandom = (getRandomIndex(covers))
    titleRandom = (getRandomIndex(titles))
    descriptorRandom1 = (getRandomIndex(descriptors))
    descriptorRandom2 = (getRandomIndex(descriptors))
}



// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

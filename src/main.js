var currentCover;
var title = document.querySelector('.cover-title')
var cover = document.querySelector('.cover-image')
var taglineOne = document.querySelector('.tagline-1')
var taglineTwo = document.querySelector('.tagline-2')
var randomCoverButton = document.querySelector('.random-cover-button')
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

// Add your event listeners here 👇
randomCoverButton.addEventListener("click", generateRandom);
window.addEventListener("load", generateRandom)

//  Create your event handlers and other functions here 👇
function generateRandom() {
  var titleIndex = getRandomIndex(titles)
  var coverIndex = getRandomIndex(covers)
  var taglineOneIndex = getRandomIndex(descriptors)
  var taglineTwoIndex = getRandomIndex(descriptors)
  
  currentCover = new Cover (covers[coverIndex], titles[titleIndex], descriptors[taglineOneIndex], descriptors[taglineTwoIndex])

  title.innerText = titles[titleIndex]
  cover.src =covers[coverIndex]
  taglineOne.innerText = descriptors[taglineOneIndex]
  taglineTwo.innerText = descriptors[taglineTwoIndex]
} 

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}






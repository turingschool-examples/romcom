// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
// var savedCovers = [
//   new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];
// var currentCover;

var savedTitle = ["Addicted","Michael's Mic in The Wind", "Beyond the Highland Mist", "Collide","Galactic Space Lover","Kathrine","It Wasn't You it Was Me", "Caress of the Armpit","The Mighty Storm","My Favorite Mistake","On the Island","Pleasure Unbound","Promises","Neil Eating Pineapple Pizza", "Twisted Perfection","Wallbanger","The Winter Sea","Texas Destiny"]
var savedTagLine = ["Mistakes","Alcohol","Drought","Passion","Musk","Humidity","Madness","Secrets","Lies","Tension","Romance","Intentions","Promises","Perils","Pleasure","Midnight","Summer","Desperation"]


function getRandomTitle() {
var currentTitleIndex = getRandomIndex(savedTitle)
var currentTitle = savedTitle[currentTitleIndex]
return currentTitle
}
console.log(getRandomTitle())

function getRandomTagLine() {

var currentTagLine1 = savedTagLine[getRandomIndex(savedTagLine)]
var currentTagLine2 = savedTagLine[getRandomIndex(savedTagLine)]
if (currentTagLine1 === currentTagLine2) {
  currentTagLine1 = 'Unquenchable Thirst'
  } return `A tale of ${currentTagLine1} and ${currentTagLine2}`
}

console.log(getRandomTagLine())
// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

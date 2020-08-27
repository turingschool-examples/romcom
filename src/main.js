// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var coverDescriptor = document.querySelector('.tagline')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
// Add your event listeners here 👇


// Create your event handlers and other functions here 👇
function getRandomIndex(coverArray, titleArray, descriptorArray) {
  var randomNum1 = Math.floor(Math.random() * coverArray.length)
  var randomNum2 = Math.floor(Math.random() * titleArray.length)
  var randomNum3 = Math.floor(Math.random() * descriptorArray.length)
  var randomNum4 = Math.floor(Math.random() * descriptorArray.length)
  coverImage.src = coverArray[randomNum1]
  coverTitle.textContent = titleArray[randomNum2]
  if (randomNum3 !== randomNum4) {
  coverDescriptor.textContent = `A tale of ${descriptorArray[randomNum3]} and ${descriptorArray[randomNum4]}`//come back to fix double names
  } else {
  randomNum4 = Math.floor(Math.random() * descriptorArray.length)
  }
}

getRandomIndex(covers, titles, descriptors)

// We've provided one function to get you started

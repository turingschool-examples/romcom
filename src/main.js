var currentCover;

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];




// Create variables targetting the relevant DOM elements here 👇
var coverLocation = document.querySelector('.cover-image')
var titleLocation = document.querySelector('.cover-title')
var taglineOneLocation = document.querySelector('.tagline-1')
var taglineTwoLocation = document.querySelector('.tagline-2')
var priceTagLocation = document.querySelector('.price-tag')

var randomButtonCover = document.querySelector('.random-cover-button')
var saveButtonCover = document.querySelector('.save-cover-button')
var viewSavedCover = document.querySelector('.view-saved-button')
var makeNewCover = document.querySelector('.make-new-button')

// We've provided a few variables below






//titles[0]







// Add your event listeners here 👇

window.addEventListener("load", generateRandomBook)

randomButtonCover.addEventListener("click", generateRandomBook)




// Create your event handlers and other functions here 👇





// We've provided one function to get you started



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}



function generateRandomBook() {
  currentCover = new Cover (randomCoverPicture, randomTitleCover, randomCoverDescriptorOne, randomCoverDescriptorTwo)

var randomTitleCover = titles[getRandomIndex(titles)]
var randomCoverPicture = covers[getRandomIndex(covers)]
var randomCoverDescriptorOne = descriptors[getRandomIndex(descriptors)]
var randomCoverDescriptorTwo = descriptors[getRandomIndex(descriptors)]

coverLocation.src = randomCoverPicture
titleLocation.innerText = randomTitleCover
taglineOneLocation.innerText = randomCoverDescriptorOne
taglineTwoLocation.innerText = randomCoverDescriptorTwo


}





// function createBook(){
//   currentCover = new Cover(cover.src, title.innerText, descriptor1.innerText, descriptor2.innerText)
// }




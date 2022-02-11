// Create variables targetting the relevant DOM elements here 👇

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagLine1 = document.querySelector(".tagline-1");
var tagLine2 = document.querySelector(".tagline-2");
var randomCover = document.querySelector(".random-cover-button")
var makeYourOwn = document.querySelector(".make-new-button")
var formView = document.querySelector(".form-view")
var homeView = document.querySelector(".main-cover")
// Add your event listeners here 👇

randomCover.addEventListener('click', showNewRandomCover)
makeYourOwn.addEventListener('click', showForm)


// Create your event handlers and other functions here 👇
function hideCover() {

}

function showForm() {
  formView.classList.toggle("hidden")
  homeView.classList.toggle("hidden")
}
function showNewRandomCover() {
coverTitle.innerText = titles[getRandomIndex(titles)]
coverImage.src = covers[getRandomIndex(covers)]
tagLine1.innerText = descriptors[getRandomIndex(descriptors)]
tagLine2.innerText = descriptors[getRandomIndex(descriptors)]

 newRandomCover()
}
 function newRandomCover() {
   currentCover = new Cover(coverImage.src, coverTitle.innerText, tagLine1.innerText, tagLine2.innerText)
 }
showNewRandomCover();

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

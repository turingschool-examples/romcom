//Global Variables below

var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var randomCoverButton = document.querySelector(".random-cover-button");
//we want to use the outcome of makeRandomBook as the arguments for var currentCover which instanciates
var currentCover = new Cover (coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText);

//when a user clicks the random cover button we want to assign the variable
//need to use the currentCover


console.log(currentCover);
//currentCover.push()

//savedCovers will be used in  ITERATION 2
// var savedCovers = [
// //can change this or the arguments passed through
  // new Cover(
  // "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
  // "Sunsets and Sorrows",
  // "sunsets",
  // "sorrows"
// ),
// ];

// Add your event listeners here 👇
//should we change this to eventlistener
window.onload = makeRandomBook();
//every time
randomCoverButton.addEventListener("click", makeRandomBook);

// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
// do we need return values, that we can use as the arguments for instanciating the Cover class
function makeRandomBook() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
}
//console.log(makeRandomBook)
// We've provided a few variables below


//console.log(savedCovers);
//Kayla would default to having smaller functions and more commits

// Create variables targetting the relevant DOM elements here 👇
var randomButton = document.querySelector(".random-cover-button");
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var makeCoverButton = document.querySelector(".make-new-button");
var homeCover = document.querySelector('.home-view')
var form = document.querySelector('.form-view')

console.log(homeCover)
// We've provided a few variables below
//var savedCovers = [
  //new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
//];
//var randomCover = new Cover(covers[coversIndex], titles[titlesIndex], descriptors[descriptorsIndex], descriptors[descriptorsIndex]);
function getRandomIndex(array) {
  return Math.floor(Math.random() * (array.length))
}

randomButton.addEventListener("click", createRandomCover)

function createRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
}
createRandomCover();


// Add your event listeners here 👇

makeCoverButton.addEventListener('click', showForm)

function showForm() {
  homeCover.classList.add('hidden')
  form.classList.remove('hidden')
}


//add comment to test commit
//? will this randomizer function work if I insert the variable covers from data.js
//need access the make cover button .querySelector
//need to access the form
//create event listener for the make cover button
//when event listener is clicked, change to form



// Create your event handlers and other functions here 👇


// We've provided one function to get you started

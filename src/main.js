// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector(".cover-image")
var coverTitle = document.querySelector(".cover-title")
var taglineNum1 = document.querySelector(".tagline-1")
var taglineNum2 = document.querySelector(".tagline-2")

var randomButton = document.querySelector(".random-cover-button")
var homeButton = document.querySelector(".home-button")
var saveButton = document.querySelector(".save-cover-button")
//var viewSavedbutton = document.querySelector(".view-saved-button")
var makeNewButton = document.querySelector(".make-new-button")

var homeView = document.querySelector(".home-view")
var savedView = document.querySelector(".saved-view")
var formView = document.querySelector(".form-view")

//add new variable for each button on the main page

//document is everything, everything on the page is part of doc
//this one is just focused on the cover image

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


//var currentCover = new Cover(Cover.id, Cover.cover, Cover.title, Cover.tagline1, Cover.tagline2);

// Add your event listeners here 👇
// document.addEventListener('load', getRandomCoverPageLoad)
window.addEventListener('load', getRandomCover)
randomButton.addEventListener('click', getRandomCover)
//homeButton.addEventListener('click' ,)
//saveButton.addEventListener('click' ,)
//viewSavedbutton.addEventListener('click' ,)
makeNewButton.addEventListener('click', displayFormView)

//this is the one that activates on load, we'll have to do another for the clicks

// Create your event handlers and other functions here 👇
//event.preventDefault()
//use this when you've set up another function and it's not working even if we're sure,
//have it in your back pocket if things are working weird

//<element>.classList.add('hidden')
//<element>.classList.remove('hidden')

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomCover() {
  var image = covers[getRandomIndex(covers)]
  //image is a new variable made for this function
  //name of index, random function, specific element we want to access from array
  var title = titles[getRandomIndex(titles)]
  var descriptor1 = descriptors[getRandomIndex(descriptors)]
  var descriptor2 = descriptors[getRandomIndex(descriptors)]

//we instantiate it here:
  currentCover = new Cover(image, title, descriptor1, descriptor2)

  coverImage.src = currentCover.cover
  coverTitle.innerText = currentCover.title
  taglineNum1.innerText = currentCover.tagline1
  taglineNum2.innerText = currentCover.tagline2
//src is where the image it's defaulting to lives in the html
//repeat this for the other categories, check to see what those are, prob innerText
  }

  function displayFormView() {
  //  homeButton.classList.remove('.hidden');

    formView.classList.remove('.hidden');

    //randomButton.classList.add('.hidden');
    //saveButton.classList.add('.hidden');

    homeView.classList.add('.hidden');
  }
//assign that html element next




//instantiate the class for a new object instance
//we have an html element selected at the top

// Create variables targetting the relevant DOM elements here 👇


var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');
var randomView = document.querySelector('.random-cover-view');
var homeButton = document.querySelector('.home-button');
var saveVButton = document.querySelector('.save-cover-button');
var viewSButton = document.querySelector('.view-saved-button');
var randomButton = document.querySelector('.random-cover-button');

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

savedVButton.addEventListener('click', savedLButton);
homeButton.addEventListener('click', homeLButton);
// element.querySelector(`.home-button`).addEventListener(`click`, homeButton());
// element.querySelector(`.saved-cover-button`).addEventListener(`click`, saveCoverButton());
// Create your event handlers and other functions here 👇
function homeLButton(){
 //q: why is this not working?
 // a:

  add(homeView);
  remove(savedView);
  remove(randomView);
  remove(formView);
  remove(homeButton);
}
function savedLButton(){
  
    add(savedView)
    remove(homeView);
    remove(homeButton);
    remove(saveVButton);
    remove(randomButton);
  
}
homeLButton();
savedLButton(); 
// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}

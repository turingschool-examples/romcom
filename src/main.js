// Create variables targetting the relevant DOM elements here 👇

var coverImgSrc = getRandomCover(covers); 
var title = getRandomTitle(titles);
var descriptor1 = getRandomDescriptor1(descriptors);
var descriptor2 = getRandomDescriptor2(descriptors);

var changeCover = document.querySelector('img');
var changeTitle = document.querySelector('h2');
var changeDescriptor1 = document.querySelector('.tagline-1');
var changeDescriptor2 = document.querySelector('.tagline-2');
var currentCover = new Cover(coverImgSrc, title, descriptor1, descriptor2);

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


function createCover() {
  changeCover.src = currentCover.cover;
  changeTitle.innerText = currentCover.title;
  changeDescriptor1.innerText = currentCover.tagline1;
  changeDescriptor2.innerText = currentCover.tagline2;
};

// Add your event listeners here 👇
document.addEventListener("DOMContentLoaded", createCover);

var randomButton = document.querySelector('.random-cover-button'); // access random cover button part of html

// Create your event handlers and other functions here 👇

randomButton.addEventListener("click", createCover);

// We've provided one function to get you started
function getRandomCover(coversArray) {
  var random = Math.floor(Math.random() * covers.length);
  return covers[random];
};

function getRandomTitle(titlesArray) {
  var random = Math.floor(Math.random() * titles.length);
  return titles[random];
};

function getRandomDescriptor1(descriptorsArray) {
    var random = Math.floor(Math.random() * descriptors.length);
    return descriptors[random];
};

function getRandomDescriptor2(descriptorsArray) {
    var random = Math.floor(Math.random() * descriptors.length);
    return descriptors[random];
};

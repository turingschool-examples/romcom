// Create variables targetting the relevant DOM elements here 👇

var coverImgSrc = getRandomCover(covers); //random img source from covers array
var title = getRandomTitle(titles); //random title from titles array
var descriptor1 = getRandomDescriptor(descriptors); //random first descriptor from array
var descriptor2 = getRandomDescriptor(descriptors); //random second descriptor from array

var changeCover = document.querySelector('img');
var changeTitle = document.querySelector('h2');
var changeDescriptor1 = document.querySelector('.tagline-1');
var changeDescriptor2 = document.querySelector('.tagline-2');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(coverImgSrc, title, descriptor1, descriptor2);

changeCover.src = currentCover.cover;
changeTitle.innerText = currentCover.title;
changeDescriptor1.innerText = this.descriptor1;
changeDescriptor2.innerText = this.descriptor2;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomCover(coversArray) {
  var random = Math.floor(Math.random() * covers.length);
  return covers[random];
}

function getRandomTitle(titlesArray) {
  var random = Math.floor(Math.random() * titles.length);
  return titles[random];
}

function getRandomDescriptor(descriptorsArray) {
    var random = Math.floor(Math.random() * descriptors.length);
    return descriptors[random];
}

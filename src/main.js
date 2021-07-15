// Create variables targetting the relevant DOM elements here 👇

var coverImgSrc = getRandomIndex(covers);
var title = getRandomIndex(titles);
var descriptor1 = getRandomIndex(descriptors);
var descriptor2 = getRandomIndex(descriptors);

var changeCover = document.querySelector('.cover-image');
var changeTitle = document.querySelector('.cover-title');
var changeDescriptor1 = document.querySelector('.tagline1');
var changeDescriptor2 = document.querySelector('.tagline2');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(coverImgSrc, title, descriptor1, descriptor2);

changeCover.innerHTML = `<img src>${this.cover}</img>`;

changeTitle.innerText = this.title;
changeDescriptor1.innerText = this.descriptor1;
changeDescriptor2.innerText = this.descriptor2;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(coversArray) {
  var random = Math.floor(Math.random() * covers.length);
  return covers[random];
}

function getRandomIndex(titlesArray) {
  var random = Math.floor(Math.random() * titles.length);
  return titles[random];
}

function getRandomIndex(descriptorsArray) {
    var random = Math.floor(Math.random() * descriptors.length);
    return descriptors[random];
}

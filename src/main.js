// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', addInstance, updateCover)

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}



function randomCoverImage(covers) {
  var x = getRandomIndex(covers);
  coverImage.src = covers[x];
  return coverImage.src
};
randomCoverImage(covers);
var cI = randomCoverImage(covers)



function randomTitle(titles) {
  var x = getRandomIndex(titles);
  bookTitle.innerText = titles[x];
  return bookTitle.innerText
}
randomTitle(titles);
var rT = randomTitle(titles)



function randomTagline1(descriptors) {
  var x = getRandomIndex(descriptors);
  tagline1.innerText = descriptors[x];
  return tagline1.innerText
}
randomTagline1(descriptors);
var tL1 = randomTagline1(descriptors)



function randomTagline2(descriptors) {
  var y = getRandomIndex(descriptors);
  tagline2.innerText = descriptors[y];
  return tagline2.innerText
}
randomTagline2(descriptors);
var tL2 = randomTagline2(descriptors)



function addInstance(){
    currentCover = [
      new Cover(cI, rT, tL1, tL2)
    ];
    return;
}

function updateCover(){
  coverImage = currentCover[currentCover.length].cover
  bookTitle = currentCover[currentCover.length].title
  tagline1 = currentCover[currentCover.length].tagline1
  tagline2 = currentCover[currentCover.length].tagline2
}

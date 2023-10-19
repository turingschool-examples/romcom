// Create variables targetting the relevant DOM elements here 👇
var randomBtn = document.querySelector('.random-cover-button');
var saveBtn = document.querySelector('.save-cover-button');
var viewBtn = document.querySelector('.view-saved-button');
var newBtn = document.querySelector('.make-new-button');
var newBookBtn = document.querySelector('.create-new-book-button');

// JP Add view saved and make new DOM element.



// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;



// Add your event listeners here 👇
randomBtn.addEventListener('click', createRandomCover);
saveBtn.addEventListener('click', saveCover);
viewBtn.addEventListener('click', viewSavedCovers);
newBtn.addEventListener('click', makeNewButton);
newBookBtn.addEventListener('click', makeNewBookButton);

// JP Add event listeners for view saved and make new.




// Create your event handlers and other functions here 👇
function createRandomCover(){
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
  document.querySelector('.cover-image').src = randomCover;
  document.querySelector('.cover-title').innerText = randomTitle;
  document.querySelector('.tagline-2').innerText = randomDescriptor2;
  document.querySelector('.tagline-1').innerText = randomDescriptor1;
}



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

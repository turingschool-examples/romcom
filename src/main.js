// Create variables targetting the relevant DOM elements here 👇

var randomImage = covers[getRandomIndex(covers)];

var randomTitle = titles[getRandomIndex(titles)];

var descriptor1 = descriptors[getRandomIndex(descriptors)];

var descriptor2 = descriptors[getRandomIndex(descriptors)];

var randomImageGenerator = new Cover(randomImage, randomTitle, descriptor1, descriptor2);

//var nodeImage = document.querySelector('.cover-image');

var nodeTitle = document.querySelector('h2');
nodeTitle.innerText = randomTitle;

//document.querySelector('h2').innerText = 'hey'


nodeImage = randomImageGenerator;

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

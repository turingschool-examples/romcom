// Create variables targetting the relevant DOM (document object model) elements here 👇
var newCoverImg = document.querySelector(".cover-image");
var newTitle = document.querySelector(".cover-title");
var newDescriptor1 = document.querySelector(".tagline-1");
var newDescriptor2 = document.querySelector(".tagline-2");
//Iteration 1: these variables refer to the classes in the HTML document and store their info in the variables defined above, these variables will be used to display the covers as defined in the css sheet
var randomCoverButton = document.querySelector(".random-cover-button");


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


var currentCover;

// Add your event listeners here 👇
randomCoverButton.addEventListener("click", generateRandomCover);


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateRandomCover(){
  var randomCoverImg = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];

  newCoverImg.src = randomCoverImg;
  newTitle.innerText = randomTitle;
  newDescriptor1.innerText = randomDescriptor1;
  newDescriptor2.innerText = randomDescriptor2;

  currentCover = new Cover (newCoverImg, newTitle, newDescriptor1, newDescriptor2);
}

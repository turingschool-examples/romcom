let cover = document.querySelector('.cover-image');
let title = document.querySelector('.cover-title');
let tagline1 = document.querySelector('.tagline-1');
let tagline2 = document.querySelector('.tagline-2');
let randomCoversIndex = getRandomIndex(covers);
let randomTitlesIndex = getRandomIndex(titles);
let randomDescriptorIndex1 = getRandomIndex(descriptors);
let randomDescriptorIndex2 = getRandomIndex(descriptors);
// let randomCover = covers[getRandomIndex(covers)];
// let randomTitle = titles[getRandomIndex(titles)];
// let randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
// let randomDescriptor2 = descriptors[getRandomIndex(descriptors)];

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = cover;

cover.src = covers[randomCoversIndex];

title.innerText = titles[randomTitlesIndex];

tagline1.innerText = descriptors[randomDescriptorIndex1];

tagline2.innerText = descriptors[randomDescriptorIndex2];

// Add your event listeners here 👇
let randomCoverButton = document.querySelector('.random-cover-button');

randomCoverButton.addEventListener('click', changeCover);

// Create your event handlers and other functions here 👇
function changeCover() {

  newCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);

  cover.src = newCover.cover;

  title.innerText = newCover.title;

  tagline1.innerText = newCover.tagline1;

  let changeCoverButtonIndex = getRandomIndex(covers);

  cover.src = covers[changeCoverButtonIndex];
}


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

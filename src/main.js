let cover = document.querySelector('.cover-image');
let title = document.querySelector('.cover-title');
let tagline = document.querySelector('.tagline');
let randomCoversIndex = getRandomIndex(covers);
let randomTitlesIndex = getRandomIndex(titles);
console.log(randomTitlesIndex);

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = cover;

cover.src = covers[randomCoversIndex];

title.innerText = titles[randomTitlesIndex];

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var exapmpelaklsjjf;alsd;klfajskld;f

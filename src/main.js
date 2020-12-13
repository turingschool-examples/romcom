var mainCover = document.querySelector('.main-cover')
var title = document.querySelector('.cover-title') 
var cover = document.querySelector('.cover-image')
var firstDescriptor = document.querySelector('.tagline-1')
var secondDescriptor = document.querySelector('.tagline-2')


var savedCovers =[];
var currentCover;

window.onload = displayRandom()

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
  };
  
function displayRandom() {
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var firstDescriptor = descriptors[getRandomIndex(descriptors)];
  var secondDescriptor = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(randomCover, randomTitle, firstDescriptor, secondDescriptor);

  mainCover.innerHTML = `
  <section class="main-cover">
  <img class="cover-image" src="${currentCover.cover}">
  <h2 class="cover-title">${currentCover.title}</h2>
  <h3 class="tagline">A tale of <span class="tagline-1">${currentCover.tagline1}</span> and <span class="tagline-2">${currentCover.tagline2}</span></h3>
  <img class="price-tag" src="./assets/price.png">
  <img class="overlay" src="./assets/overlay.png">
</section>
`
};

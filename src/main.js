// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tagline1 = document.querySelector('.tagline-1')
var tagline2 = document.querySelector('.tagline-2')




// We've provided a few variables below
var savedCovers = [
  createCover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]) ]
  

console.log(savedCovers);
var currentCover;

// Add your event listeners here 👇
window.addEventListener("load", loadCover)


// Create your event handlers and other functions here 👇


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


function loadCover(){
  coverTitle.innerText = titles[getRandomIndex(titles)]
  coverImage.src = covers[getRandomIndex(covers)]
  tagline1.innerText =  descriptors[getRandomIndex(descriptors)]
  tagline2.innerText =  descriptors[getRandomIndex(descriptors)]
}
var coverRandom 
var titleRandom
var descriptorRandom1
var descriptorRandom2

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover = new Cover(covers[coverRandom], titles[titleRandom], descriptors[descriptorRandom1], descriptors[descriptorRandom2])




// Add your event listeners here 👇

var elements = document.getElementsByClassName("random-cover-button")
elements[0].addEventListener('click', newRandomCover)


// Create your event handlers and other functions here 👇
function newRandomCover() {
    coverRandom = (getRandomIndex(covers))
    titleRandom = (getRandomIndex(titles))
    descriptorRandom1 = (getRandomIndex(descriptors))
    descriptorRandom2 = (getRandomIndex(descriptors))

    document.getElementsByClassName('cover-image')[0].src = covers[coverRandom]
    document.getElementsByClassName('cover-title')[0].innerHTML = titles[titleRandom]
    document.getElementsByClassName('tagline')[0].innerHTML = `A tale of ${descriptors[descriptorRandom1]} and ${descriptors[descriptorRandom2]}`

}



// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

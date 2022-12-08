var coverRandom 
var titleRandom
var descriptorRandom1
var descriptorRandom2
var view

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover = new Cover(covers[coverRandom], titles[titleRandom], descriptors[descriptorRandom1], descriptors[descriptorRandom2])



var currentCover = new Cover(covers[coverRandom], titles[titleRandom], descriptors[descriptorRandom1], descriptors[descriptorRandom2])





// Event listeners 👇
//__________________________________________________________________________________


var randomCover = document.getElementsByClassName("home-button hidden")
randomCover[0].addEventListener('click', homeView)

var makeNew = document.getElementsByClassName("view-saved-button")
makeNew[0].addEventListener('click', viewSaved)

var formView = document.getElementsByClassName("make-new-button")
formView[0].addEventListener('click', viewForm)

//...

var randomCover = document.getElementsByClassName("random-cover-button")
randomCover[0].addEventListener('click', newRandomCover)

var saveCover = document.getElementsByClassName("make-new-button")
saveCover[0].addEventListener('click', viewForm)

//__________________________________________________________________________________

// Create your event handlers and other functions here 👇
function newRandomCover() {

    coverRandom = (getRandomIndex(covers))
    titleRandom = (getRandomIndex(titles))
    descriptorRandom1 = (getRandomIndex(descriptors))
    descriptorRandom2 = (getRandomIndex(descriptors))

    document.getElementsByClassName("cover-image")[0].src = covers[coverRandom]
    document.getElementsByClassName("cover-title")[0].innerHTML = titles[titleRandom]
    document.getElementsByClassName("tagline")[0].innerHTML = `A tale of ${descriptors[descriptorRandom1]} and ${descriptors[descriptorRandom2]}`

  }


// Page Switching 👇
//__________________________________________________________________________________

function homeView() {
    view = 'home'
    hide()
    console.log('yea')
    buttonCheck()
    console.log('yea')
    document.getElementsByClassName("view home-view")[0].style.display = "block"
}

function viewForm() {
    view = 'form'
    hide()
    buttonCheck()
    document.getElementsByClassName("view form-view hidden")[0].style.display = "block"
}

function viewSaved() {
    view = 'saved'
    hide()
    buttonCheck()
    document.getElementsByClassName("view saved-view hidden")[0].style.display = "block"
}

function hide() {
  document.getElementsByClassName("view home-view")[0].style.display = "none"
  document.getElementsByClassName("view saved-view hidden")[0].style.display = "none"
  document.getElementsByClassName("view form-view hidden")[0].style.display = "none"
}
//__________________________________________________________________________________

function buttonCheck() {
  if(view === 'home') {
    document.getElementsByClassName("home-button hidden")[0].style.display = "none"
  } else {
    document.getElementsByClassName("home-button hidden")[0].style.display = "block"
}
}


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}
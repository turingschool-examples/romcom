var randomCoverButton = document.querySelector('.random-cover-button')
var randomCoverImage = document.querySelector('.cover-image')
var randomCoverTitle = document.querySelector('.cover-title')
var randomDescriptor1 = document.querySelector('.tagline-1')
var randomDescriptor2 = document.querySelector('.tagline-2')
var saveCoverButton = document.querySelector('.save-cover-button')
var makeNewButton = document.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button')
var viewSavedButton = document.querySelector('.view-saved-button')
var viewFormView = document.querySelector('.form-view')
var viewHomeView = document.querySelector('.home-view')
var viewSavedView = document.querySelector('.saved-view')
var viewSavedCoversSection = document.querySelector('.saved-covers-section')
var makeMyBookButton = document.querySelector('.create-new-book-button')
var inputUserCover = document.querySelector('.user-cover')
var inputTitle = document.querySelector('.user-title')
var inputDescriptor1 = document.querySelector('.user-desc1')
var inputDescriptor2 = document.querySelector('.user-desc2')
var miniCover = document.querySelector('.mini-cover')
var savedCovers = [
  new Cover(
    'http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg',
    'Sunsets and Sorrows',
    'sunsets',
    'sorrows'
  )
]
var currentCover

randomCoverButton.addEventListener('click', showRandomCover)
makeNewButton.addEventListener('click', makeOwnCover)
viewSavedButton.addEventListener('click', saveCovers)
homeButton.addEventListener('click', takeMeHome)
makeMyBookButton.addEventListener('click', makeMyBook)
saveCoverButton.addEventListener('click', saveMyCover)
viewSavedCoversSection.addEventListener('dblclick', deleteBook)

function getRandomIndex (array) {
  return Math.floor(Math.random() * array.length)
}

function getRandomCover () {
  var randomCover = covers[getRandomIndex(covers)]
  var randomTitle = titles[getRandomIndex(titles)]
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)]
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)]
  currentCover = new Cover(
    randomCover,
    randomTitle,
    randomDescriptor1,
    randomDescriptor2
  )
  return currentCover
}

function showRandomCover () {
  showCover(getRandomCover())
}

function showCover (coverInstance) {
  randomCoverImage.src = coverInstance.cover
  randomCoverTitle.innerText = coverInstance.title
  randomDescriptor1.innerText = coverInstance.tagline1
  randomDescriptor2.innerText = coverInstance.tagline2
}

function makeOwnCover () {
  viewHomeView.classList.add('hidden')
  randomCoverButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  viewFormView.classList.remove('hidden')
  homeButton.classList.remove('hidden')
  viewSavedView.classList.add('hidden')
}

function saveCovers () {
  event.preventDefault()
  viewHomeView.classList.add('hidden')
  viewSavedView.classList.remove('hidden')
  saveCoverButton.classList.add('hidden')
  randomCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
  viewSavedCoversSection.classList.remove('hidden')
  viewFormView.classList.add('hidden')

  var displayCoverHTML = ''
  for (var i = 0; i < savedCovers.length; i++) {
    displayCoverHTML += `<section class='mini-cover' id=${savedCovers[i].id}>
      <img class="cover-image" src=${savedCovers[i].cover}>
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
      </section>`
  }
  viewSavedCoversSection.innerHTML = displayCoverHTML
}

function takeMeHome () {
  viewHomeView.classList.remove('hidden')
  viewFormView.classList.add('hidden')
  viewSavedView.classList.add('hidden')
  randomCoverButton.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
  homeButton.classList.add('hidden')
}

function makeMyBook () {
  event.preventDefault()
  var myBookCover = inputUserCover.value
  covers.push(myBookCover)
  var myBookTitle = inputTitle.value
  titles.push(myBookTitle)
  var myDescriptor1 = inputDescriptor1.value
  descriptors.push(myDescriptor1)
  var myDescriptor2 = inputDescriptor2.value
  descriptors.push(myDescriptor2)
  currentCover = new Cover(
    myBookCover,
    myBookTitle,
    myDescriptor1,
    myDescriptor2
  )
  takeMeHome()
  showCover(currentCover)
}

function saveMyCover () {
  for (var i = 0; i < savedCovers.length; i++) {
    if (!savedCovers.includes(currentCover)) {
      savedCovers.push(currentCover)
    }
  }
}

function deleteBook () {
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id === Number(event.target.parentNode.id)) {
      savedCovers.splice(i, 1)
    }
    saveCovers()
  }
}

var mainCover = document.querySelector('.main-cover')
var randomButton = document.querySelector('.random-cover-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var savedButton = document.querySelector('.view-saved-button')
var makeNewButton = document.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button')
var createNewButton = document.querySelector('.create-new-book-button')
var formView = document.querySelector('.form-view')
var savedView = document.querySelector('.saved-view')
var coverTitle = document.querySelector('.cover-title')
var coverImage = document.querySelector('.cover-image')
var taglineOne = document.querySelector('.tagline-1')
var taglineTwo = document.querySelector('.tagline-2')
var userCoverInput = document.querySelector('.user-cover')
var userTitleInput = document.querySelector('.user-title')
var userDescriptorOneInput = document.querySelector('.user-desc1')
var userDescriptorTwoInput = document.querySelector('.user-desc2')
var userCover = document.querySelector('.user-cover')
var userTitle = document.querySelector('.user-title')
var userDescriptorOne = document.querySelector('.user-desc1')
var userDescriptorTwo = document.querySelector('.user-desc2')

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover = new Cover();

randomButton.addEventListener('click', getRandomCoverPageLoad);
savedButton.addEventListener('click', viewSaved);
makeNewButton.addEventListener('click', makeNewCover);
homeButton.addEventListener('click', goHome);
createNewButton.addEventListener('click', makeBook);
saveCoverButton.addEventListener('click', savedCover);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomCoverPageLoad(event) {
  var cover = covers[getRandomIndex(covers)]
  var title = titles[getRandomIndex(titles)]
  var descriptor1 = descriptors[getRandomIndex(descriptors)]
  var descriptor2 = descriptors[getRandomIndex(descriptors)]
  currentCover = new Cover(cover, title, descriptor1, descriptor2)
  coverImage.src = currentCover.cover
  coverTitle.innerText = currentCover.title
  taglineOne.innerText = currentCover.tagline1
  taglineTwo.innerText = currentCover.tagline2
}
getRandomCoverPageLoad()

function makeNewCover() {
  mainCover.classList.add("hidden");
  formView.classList.remove("hidden");
  randomButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  savedView.classList.add("hidden");
}
function goHome() {
  mainCover.classList.remove("hidden");
  formView.classList.add("hidden");
  randomButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
  homeButton.classList.add("hidden");
  savedView.classList.add("hidden");
}
function viewSaved() {
  randomButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  savedButton.classList.remove("hidden");
  mainCover.classList.add("hidden");
  savedView.classList.remove("hidden");
  homeButton.classList.remove("hidden");
  var savedCoversPage = document.querySelector('.saved-covers-section')
  var finalList = ""
  for (i = 0; i < savedCovers.length; i++) {
    finalList= finalList + `<section class="mini-cover">
        <img class="cover-image" src="${savedCovers[i].cover}">
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </section>`
  }
  savedCoversPage.innerHTML = finalList;
}
function makeBook(event) {
  event.preventDefault();
  covers.push(userCoverInput.value);
  titles.push(userTitleInput.value);
  descriptors.push(userDescriptorOneInput.value);
  descriptors.push(userDescriptorTwoInput.value);
  var newCustomCover = new Cover(userCoverInput.value, userTitleInput.value, userDescriptorOneInput.value, userDescriptorTwoInput.value);
  coverImage.src = newCustomCover.cover;
  coverTitle.innerText = newCustomCover.title;
  taglineOne.innerText = newCustomCover.tagline1
  taglineTwo.innerText = newCustomCover.tagline2
  goHome();
}
function savedCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
    console.log(savedCovers)
    console.log(currentCover)
  }
}

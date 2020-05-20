// cover title and tagline variables
var loadCvr = document.querySelector('.cover-image');
var loadTitle = document.querySelector('.cover-title');
var tag1 = document.querySelector('.tagline-1');
var tag2 = document.querySelector('.tagline-2');
//btn variables
var randomCvrBtn = document.querySelector('.random-cover-button');
var makeNewCvrBtn = document.querySelector('.make-new-button');
var viewHomeBtn = document.querySelector('.home-button');
var saveCvrBtn = document.querySelector('.save-cover-button');
var viewSavedBtn = document.querySelector('.view-saved-button');
//page variables
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');
//form variables
var inputCover = document.getElementById('cover');
var inputTitle = document.getElementById('title');
var inputDesc1 = document.getElementById('descriptor1');
var inputDesc2 = document.getElementById('descriptor2');
var makeBookBtn = document.querySelector('.create-new-book-button');

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

window.onload = showNewRandomCvr();

randomCvrBtn.addEventListener('click', showNewRandomCvr);
makeNewCvrBtn.addEventListener('click' , goToFormView);
viewHomeBtn.addEventListener('click', goToHomeView);
makeBookBtn.addEventListener('click', makeOwnForm);
viewSavedBtn.addEventListener('click', goToSavedView);
saveCvrBtn.addEventListener('click', saveCover);
savedView.addEventListener('dblclick', deleteSavedCover);

function showNewRandomCvr() {
  loadCvr.src = `${covers[getRandomIndex(covers)]}`;
  loadTitle.innerText = `${titles[getRandomIndex(titles)]}`;
  tag1.innerText = `${descriptors[getRandomIndex(descriptors)]}`;
  tag2.innerText = `${descriptors[getRandomIndex(descriptors)]}`;
}

function goToFormView() {
  viewHomeBtn.classList.remove('hidden');
  homeView.classList.add('hidden');
  savedView.classList.add('hidden');
  formView.classList.remove('hidden');
  randomCvrBtn.classList.add('hidden');
  saveCvrBtn.classList.add('hidden');
}

function goToSavedView() {
  homeView.classList.add('hidden');
  viewHomeBtn.classList.remove('hidden');
  savedView.classList.remove('hidden');
  formView.classList.add('hidden');
  randomCvrBtn.classList.add('hidden');
  saveCvrBtn.classList.add('hidden');
}

function goToHomeView() {
  viewHomeBtn.classList.add('hidden');
  homeView.classList.remove('hidden');
  savedView.classList.add('hidden');
  formView.classList.add('hidden');
  randomCvrBtn.classList.remove('hidden');
  saveCvrBtn.classList.remove('hidden');
}

function saveCover(event) {
  var coverSaved = new Cover(loadCvr.src, loadTitle.innerText, tag1.innerText, tag2.innerText);
  var noDuplicates = true;
  for(var i = 0; i < savedCovers.length; i++) {
    if(areDuplicates(savedCovers[i], coverSaved)) {
      noDuplicates = false;
    }
  }
  if(noDuplicates) {
    savedCovers.push(coverSaved);
  }
  savedViewHtml();
}

function areDuplicates(covSavedItem, coverSaved) {
  if(covSavedItem.cover === coverSaved.cover &&
    covSavedItem.title === coverSaved.title &&
    covSavedItem.tagline1 === coverSaved.tagline1 &&
    covSavedItem.tagline2 === coverSaved.tagline2) {
      return true;
   }
}

function savedViewHtml() {
  var savedCoversHTML = ""
  savedCovers.forEach(function(covers) {
    savedCoversHTML += `
    <section class="mini-cover">
      <img class="cover-image" id=${covers.id} src=${covers.cover}>
      <h2 class="cover-title">${covers.title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${covers.tagline1}</span> and <span class="tagline-2">${covers.tagline2}</span></h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
    </section>
    `
  });
  document.querySelector('.saved-covers-section').innerHTML = savedCoversHTML;
}

function makeOwnForm(){
  event.preventDefault();
  userCreatedBook();
  viewUserCreatedBook();
  goToHomeView();
  document.querySelector('form').reset();
}

function userCreatedBook(event) {
  if(!covers.includes(inputCover.value)){
    covers.push(inputCover.value);
  }
  if(!titles.includes(inputTitle.value)){
    titles.push(inputTitle.value);
  }
  if(!descriptors.includes(inputDesc1.value || inputDesc2.value)){
    descriptors.push(inputDesc1.value, inputDesc2.value);
  }
}

function viewUserCreatedBook() {
  loadCvr.src = `${inputCover.value}`;
  loadTitle.innerText = `${inputTitle.value}`;
  tag1.innerText = `${inputDesc1.value}`;
  tag2.innerText = `${inputDesc2.value}`;
}

function deleteSavedCover(event) {
  var deleteCoverId = parseInt(event.target.id);
  for(var i = 0; i < savedCovers.length; i++){
    if (savedCovers[i].id === deleteCoverId) {
      savedCovers.splice(i, 1);
    }
  }
  savedViewHtml();
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

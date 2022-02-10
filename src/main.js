//var Cover = require('../cover');
// var covers = require('../data');
// var titles = require('../data');
// var descriptors = require('../data');

var covers = [
  './assets/bluebrocade.jpg',
  './assets/dance.jpg',
  './assets/embrace.png',
  './assets/fire.png',
  './assets/frock.png',
  './assets/glorious.jpg',
  './assets/golden.jpg',
  './assets/maskedmeeting.jpg',
  './assets/masquerade.jpg',
  './assets/moonlitmeadow.jpg',
  './assets/office.png',
  './assets/picnic.jpg',
  './assets/pirate.jpg',
  './assets/prairie.jpg',
  './assets/redrenaissance.jpg',
  './assets/regency.jpg',
  './assets/ribbons.jpg',
  './assets/roses.jpg',
  './assets/ruffles.jpg',
  './assets/scroll.jpg',
  './assets/shine.png',
  './assets/smolder.png',
  './assets/snow.jpg',
  './assets/sparkles.jpg',
  './assets/stripes.png',
  './assets/wildwest.jpg',
  './assets/windswept.jpg',
];

var titles = [
  "Passionate Moonlight",
  "Love's Misery",
  "Roses and Flame",
  "Innocent Roses",
  "Silk and Sense",
  "Hearts Aflame",
  "Fiery Passion",
  "Stolen Hearts",
  "Secrets and Silk",
  "Dreams of Fire",
  "Lovers and Enemies",
  "Passion's Embrace",
  "Harbinger by Moonlight",
  "Rouge Red",
  "Moonlit Mysteries",
  "Crimson Roses",
  "Destiny's Fires",
  "Proposals and Passion",
  "Silk Wedding",
  "Masked Seduction",
  "Crimson Masquerade",
  "Stolen Rubies",
  "Emerald Eyes",
  "Sapphire Skies",
  "Opal Passions"
];

var descriptors = [
  "passion",
  "glory",
  "romance",
  "woe",
  "sorrow",
  "pain",
  "ardor",
  "devotion",
  "excitement",
  "fervor",
  "rage",
  "spirit",
  "zeal",
  "ecstasy",
  "fire",
  "storms",
  "tempests",
  "rapture",
  "ire",
  "jealousy",
  "exhilaration",
  "bliss",
  "enchantment",
  "paradise",
  "calamity",
  "disaster",
  "heartache",
  "misfortune",
  "agony",
  "curses",
  "blessings",
  "melancholy"
];

// Create variables targetting the relevant DOM elements here 👇
//things we need to find: cover image, title, Tagline, 2 descriptors in tagline.

var coverImage = document.querySelector("img.cover-image");
var mainTitle = document.querySelector("h2.cover-title");
var tagline = document.querySelector("h2.tagline");
var taglineDescriptor1 = document.querySelector("span.tagline-1");
var taglineDescriptor2 = document.querySelector("span.tagline-2");

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
// var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started. This function pulls just the index number.
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

coverImage.src = covers[getRandomIndex(covers)];
mainTitle.innerText = titles[getRandomIndex(titles)];
taglineDescriptor1.innerText = descriptors[getRandomIndex(descriptors)];
taglineDescriptor2.innerText = descriptors[getRandomIndex(descriptors)];

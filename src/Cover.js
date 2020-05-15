class Cover {
  constructor(coverImgSrc, title, descriptor1, descriptor2) {
    this.id = Date.now();
    this.cover = coverImgSrc;
    this.title = title;
    this.tagline1 = descriptor1;
    this.tagline2 = descriptor2;
  }
  randomRomCom() {
    this.cover.src = covers[getRandomIndex(covers)];
    this.title.innerText = titles[getRandomIndex(titles)];
    this.tagline1.innerText = descriptors[getRandomIndex(descriptors)];
    this.tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  };
}

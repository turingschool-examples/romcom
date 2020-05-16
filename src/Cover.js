class Cover {
  constructor(coverImgSrc, title, descriptor1, descriptor2) {
    this.id = Date.now();
    this.cover = coverImgSrc;
    this.title = title;
    this.tagline1 = descriptor1;
    this.tagline2 = descriptor2;
  }
  randomizeCover()) {
    this.cover = covers[getRandomIndex(covers)];
    this.title = titles[getRandomIndex(titles)];
    this.tagline1 = descriptors[getRandomIndex(descriptors)];
    this.tagline2 = descriptors[getRandomIndex(descriptors)];
  };
}

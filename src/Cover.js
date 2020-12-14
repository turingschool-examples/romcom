class Cover {
  constructor(coverImgSrc, title, descriptor1, descriptor2) {
    this.id = Date.now();
    this.cover = coverImgSrc;
    this.title = title;
    this.tagline1 = descriptor1;
    this.tagline2 = descriptor2;
  }
}
// var randomImage = covers[getRandomIndex(covers)];
// var randomTitle = titles[getRandomIndex(titles)];
// var randomDescriptor = descripters[getRandomIndex(descripters)];
// var randomDescriptorTwo = descriptors[getRandomIndex(descriptors)];
// var randomCover = new Cover(randomImage, randomTitle, randomDescriptor, randomDescriptor)

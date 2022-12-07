class Cover { //the site is an instance of this class
  constructor(coverImgSrc, title, descriptor1, descriptor2) {
    this.id = Date.now(); 
    this.cover = coverImgSrc; 
    this.title = title; //titles, assets (images), descriptors from the data page
    this.tagline1 = descriptor1; //a tale of passion and woe
    this.tagline2 = descriptor2; //woe
  }
}
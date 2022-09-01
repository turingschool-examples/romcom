class Cover {
  constructor(coverImgSrc, title, descriptor1, descriptor2) {
    this.id = Date.now();
    this.cover = coverImgSrc;
    this.title = title;
    this.tagline1 = descriptor1;
    this.tagline2 = descriptor2;
  }
}



// 1. listen event is triggered
// 2. function is called
// 3. random integer from function is used to select from that index of the arrays such as cover, descriptor etc.
// 4. use object created with cover class and random integer to replace variables using inner html 
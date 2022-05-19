class Cover {
  constructor(coverImgSrc, title, descriptor1, descriptor2) {
    this.id = Date.now();
    this.cover = coverImgSrc;
    this.title = title;
    this.tagline1 = descriptor1;
    this.tagline2 = descriptor2;
  }
  //add any method that is specific to this class
}

//cover has its own file.
//If you are going to make other classes, perhaps you can start other classes
//in their own files.  Add a title file and a tagline file.

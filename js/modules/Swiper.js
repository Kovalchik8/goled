class Slider {
  constructor() {
    this.events()
  }

  events() {
    this.ini_swiper()
  }

  ini_swiper() {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 3,
      // freeMode: true,
      direction: 'vertical',
      loopedSlides: 2, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
          direction: 'horizontal',
          spaceBetween: 24
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
          direction: 'horizontal',
          spaceBetween: 24
        }
      }
    })
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loopedSlides: 2, //looped slides should be the same
      thumbs: {
        swiper: galleryThumbs
      }
    })
  }
}

export default Slider

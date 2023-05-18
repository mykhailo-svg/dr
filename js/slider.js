var galleryThumbs = new Swiper('.gallery-thumbs', {
     
    slidesPerView: 1,
    freeMode: false,
    watchSlidesProgress: true,
    spaceBetween: 40,
    breakpoints: {
      // when window width is >= 320px
      500: {
        freeMode: true,
        slidesPerView: 3,
     
      },
       800: {
        slidesPerView: 5,
     
      },
      938: {
        slidesPerView: 7,
     
      },

    }
    
  });


  var galleryTop = new Swiper('.gallery-top', {
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    },
    
  
    
  });
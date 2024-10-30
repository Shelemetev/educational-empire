
document.addEventListener('DOMContentLoaded', () => {
  const PhotosSwiper = new Swiper('.photos__swiper', {
    loop: true,
    freeMode: true,
    spaceBetween: 8,
    slidesPerView: "auto",
    autoplay: {
      delay: 1,
      disableOnInteraction: false
    },
    speed: 5000,
    preventInteractionOnTransition: false,
  })

  PhotosSwiper.slides.forEach((original_img) => {
    var img = new Image()
    img.src = original_img.src
    img.classList = original_img.classList
    PhotosSwiper.removeAllSlides();
    img.addEventListener('load', (new_img) => {
      PhotosSwiper.appendSlide(img)
    })

    PhotosSwiper.update();
    
  });
  
  

})
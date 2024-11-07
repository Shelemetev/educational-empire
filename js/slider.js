
window.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll(".photos__swiper-wrapper > .photos__swiper-slide")
    const sliderContent = document.querySelector(".slider__content");

    for (let index = 0; index < images.length; index++) {
        images[index].setAttribute('data-number', index)
        
    }
    
    for (let i = 0; i < images.length; i++) {
        let img = document.createElement('img')
        img.classList.add(`slider__content-slide`)
        img.classList.add(`slider__content-slide--${i}`)
        img.src = images[i].src
        sliderContent.appendChild(img)
       
    }

    document.querySelector('.slider__btn--close').addEventListener('click', () => {
        let currPos = currModalSliderImagePos()
        hideSlide(currPos)
        document.querySelector('.slider').style.display = 'none'
    })
    
    function currModalSliderImagePos() {
        for (let i = 0; i < document.querySelectorAll('.slider__content-slide').length; i++) {
          if (
            window.getComputedStyle(document.querySelectorAll('.slider__content-slide')[i]).display !== "none" &&
            typeof document.querySelectorAll('.slider__content-slide')[i] !== "undefined"
          ) {
            return i;
          }
        }
        return false;
      }

    function nextSlide(pos) {
        if (pos >= 0 && typeof document.querySelectorAll('.slider__content-slide')[pos + 1] !== "undefined") {
            return (pos + 1)
        }
        return false
    }

    function prevSlide(pos) {
        if (pos >= 0 && typeof document.querySelectorAll('.slider__content-slide')[pos - 1] !== "undefined" ) {
            return (pos - 1)
        }
        return false
    }

    let showSlide = (pos,duration) => {
        document.querySelector(`.slider__content-slide--${pos}`).style.display = 'block'
    }

    let hideSlide = (pos,duration) => {
        document.querySelector(`.slider__content-slide--${pos}`).style.display = 'none'
    }

    document.querySelector('.slider__btn--next').addEventListener('click', () => {
        let currPos = currModalSliderImagePos()
        if (nextSlide(currPos) !== false) {
            hideSlide(currPos)
            showSlide(nextSlide(currPos))
        }
        
    })

    document.querySelector('.slider__btn--prev').addEventListener('click', () => {
        let currPos = currModalSliderImagePos()
        if (prevSlide(currPos) !== false) {
            hideSlide(currPos)
            showSlide(prevSlide(currPos))
        }
        
    })

    document.querySelectorAll(".photos__swiper-wrapper > .photos__swiper-slide").forEach((item) => {
        item.addEventListener('click', (e) => {
            let currPos = e.target.dataset.number
            document.querySelector('.slider').style.display = 'block'

            showSlide(currPos)
        })
    })

})   
    

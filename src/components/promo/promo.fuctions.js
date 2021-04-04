import {$} from '@core/dom'
window.sliderIndex = 1
export function prevSlide() {
  showSlide(window.sliderIndex -=1)
}
export function nextSlide() {
  showSlide(window.sliderIndex +=1)
}

function showSlide(n) {
  const slides = $('.carousel__item').$el
  console.log('slide', n)
  console.log('cur', window.sliderIndex)
  if (n > slides.length) {
    window.sliderIndex = 1
  }
  if (n < 1) {
    window.sliderIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
    const slide = $(slides[i])
    slide.css({display: 'none'})
  }
  const current = $(slides[window.sliderIndex - 1])
  current.css({display: 'flex'})
}

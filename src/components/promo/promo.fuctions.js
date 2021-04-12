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
  if (n > slides.length) {
    window.sliderIndex = 1
  }
  if (n < 1) {
    window.sliderIndex = slides.length
  }
  slides.forEach(slide => $(slide).css({display: 'none'}))
  const current = $(slides[window.sliderIndex - 1])
  current.css({display: 'flex'})
}

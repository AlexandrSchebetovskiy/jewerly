import {AppComponent} from '@core/AppComponent'
import {$} from '@core/dom'
import {prevSlide, nextSlide} from './promo.fuctions'

window.sliderIndex = 1
export class Promo extends AppComponent {
  static className ='promo'
  static tagName = 'section'
  constructor($root) {
    super($root, {
      name: 'Promo',
      listeners: ['click']
    })
    this.a = 1
  }
  toHTML() {
    return `
    <div class="container">
      <div class="promo__carousel">
        <div class="carousel">
        <div class="carousel__item">
          <div class="carousel__img-content">
            <img src="img/slider/slider_1.jpg" alt="">
          </div>
          <div class="carousel__text-content">
            <h1 class="carousel__title">
              <div class="carousel__title--big">Love1</div>
              <br><span>collection</span>
            </h1>
            <p class="carousel__descr">Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Nam, deleniti!</p>
            <button class="carousel__button">See the Collectoin</button>
          </div>
        </div>

        <div  class="carousel__item">
          <div class="carousel__img-content">
            <img src="img/slider/slider_2.jpg" alt="">
          </div>
          <div class="carousel__text-content">
            <h1 class="carousel__title">
              <div class="carousel__title--big">Love2</div>
              <br><span>collection</span>
            </h1>
            <p class="carousel__descr">Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Nam, deleniti!</p>
            <button class="carousel__button">See the Collectoin</button>
          </div>
        </div>

        <div  class="carousel__item">
          <div class="carousel__img-content">
            <img src="img/slider/slider_2.jpg" alt="">
          </div>
          <div class="carousel__text-content">
            <h1 class="carousel__title">
              <div class="carousel__title--big">Love3</div>
              <br><span>collection</span>
            </h1>
            <p class="carousel__descr">Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Nam, deleniti!</p>
            <button class="carousel__button">See the Collectoin</button>
          </div>
        </div>

        <div class="arrow arrow__left"></div>
        <div class="arrow arrow__right"></div>
        </div>
      </div>
    </div>
    `
  }
  onClick(event) {
    if ($(event.target).is('arrow')) {
      const $current = $('.carousel__item[data-curr="true"]')
      console.log($current.data);
      if ($(event.target).is('arrow__left')) {
        prevSlide()
      } else {
        nextSlide()
      }
    }
  }
}



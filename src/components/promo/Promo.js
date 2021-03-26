import {AppComponent} from '@core/AppComponent'

export class Promo extends AppComponent {
  static className ='promo'
  static tagName = 'section'
  toHTML() {
    return `
    <div class="container">
      <div class="promo__carousel">
        <div class="carousel">

          <div class="carousel__img-content">
            <img src="img/slider/slider_1.jpg" alt="">
            <!-- <img src="img/slider/slider_2.jpg" alt=""> -->
          </div>
          <div class="carousel__text-content">
            <h1 class="carousel__title">
              <div class="carousel__title--big">Love</div>
              <br><span>collection</span>
            </h1>
            <p class="carousel__descr">Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Nam, deleniti!</p>
            <button class="carousel__button">See the Collectoin</button>
          </div>
        </div>
      </div>
    </div>
    `
  }
}

import {AppComponent} from '@core/AppComponent'

export class Bestsellers extends AppComponent {
  static className ='bestsellers'
  static tagName = 'div'
  toHTML() {
    return `
    <div class="container">
      <h2 class="bestsellers__title">best sellers</h2>
      <div class="bestsellers__wrap">
        <div class="card">
          <div class="card__img">
            <img src="img/cards/product-23.png" alt="">
          </div>
          <div class="card__content">
            <h3 class="card__title">Golden Earing</h3>
            <div class="card__price">338.00 $</div>
            <button class="card__button">buy now</button>
          </div>
        </div>
        <div class="card">
          <div class="card__img">
            <img src="img/cards/product-27.png" alt="">
          </div>
          <div class="card__content">
            <h3 class="card__title">Silver Earing</h3>
            <div class="card__price">120.00 $</div>
            <button class="card__button">buy now</button>
          </div>
        </div>
        <div class="card">
          <div class="card__img">
            <img src="img/cards/product-24.png" alt="">
          </div>
          <div class="card__content">
            <h3 class="card__title">Platinum Earing</h3>
            <div class="card__price">653.00 $</div>
            <button class="card__button">buy now</button>
          </div>
        </div>
        <div class="card">
          <div class="card__img">
            <img src="img/cards/product-26.png" alt="">
          </div>
          <div class="card__content">
            <h3 class="card__title">Golden Earing with Gems</h3>
            <div class="card__price">445.00 $</div>
            <button class="card__button">buy now</button>
          </div>
        </div>
      </div>
    </div>
    `
  }
}

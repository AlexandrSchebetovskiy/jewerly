import {AppComponent} from '@core/AppComponent'

export class Store extends AppComponent {
  static className ='store'
  static tagName = 'section'

  constructor($root) {
    super($root, {
      name: 'Store'
    })
  }

  toHTML() {
    return `
    <div class="container">
      <h2 class="store__title">store</h2>
      <ul class="store__nav">
        <li class="store__nav-item">Filter all</li>
        <li class="store__nav-item">necklaces</li>
        <li class="store__nav-item">earings</li>
        <li class="store__nav-item">rings</li>
        <li class="store__nav-item">watches</li>
        <li class="store__nav-item">braceletes</li>
      </ul>
      <div class="store__grid">
        <div class="store__item" >
          <div class="store__img">
            <img src="img/store/product-1.jpg" alt="">
          </div>
          <div class="store__content">
            <h3 class="store__title">Silver Earing</h3>
            <div class="store__price">120.00 $</div>
            <button class="store__button">buy now</button>
          </div>
        </div>
        <div class="store__item">
          <div class="store__img">
            <img src="img/store/product-2.jpg" alt="">
          </div>
          <div class="store__content">
            <h3 class="store__title">Silver Earing</h3>
            <div class="store__price">120.00 $</div>
            <button class="store__button">buy now</button>
          </div>
        </div>
        <div class="store__item">
          <div class="store__img">
            <img src="img/store/product-12.jpg" alt="">
          </div>
          <div class="store__content">
            <h3 class="store__title">Silver Earing</h3>
            <div class="store__price">120.00 $</div>
            <button class="store__button">buy now</button>
          </div>
        </div>
    </div>
    </div>>
    `
  }
}

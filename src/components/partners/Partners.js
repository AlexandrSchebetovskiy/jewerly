import {AppComponent} from '@core/AppComponent'

export class Partners extends AppComponent {
  static className ='partners'
  static tagName = 'div'

  constructor($root, options) {
    super($root, {
      name: 'Partners',
      ...options
    })
  }
  toHTML() {
    return `
    <div class="container">
      <h2 class="partners__title">OUR PARTNERS</h2>
      <div class="partners__wrap">
        <div class="partners__item">
        <img src="img/about/partners/Balenciaga.png" alt="">
        </div>
        <div class="partners__item">
        <img src="img/about/partners/Kenzo.png" alt="">
        </div>
        <div class="partners__item">
        <img src="img/about/partners/Chanel.png" alt="">
        </div>
        <div class="partners__item">
        <img src="img/about/partners/Tiffany-Co.png" alt="">
        </div>
        <div class="partners__item">
        <img src="img/about/partners/Marc-Jacobs.png" alt="">
        </div>
      </div>
    </div>
    `
  }
}

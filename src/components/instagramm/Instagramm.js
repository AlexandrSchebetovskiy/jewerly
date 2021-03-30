import {AppComponent} from '@core/AppComponent'

export class Instagramm extends AppComponent {
  static className = 'instagram'
  static tagName = 'div'
  constructor($root) {
    super($root, {
      name: 'Instagram'
    })
  }
  toHTML() {
    return `
    <div class="container">
      <h3 class="instagram__title">Follow us on Instagramm</h3>
    </div>
    <div class="instagram__wrap">
      <div class="instagram__item">
      <a href="#"><img src="img/about/inst_1.jpg" alt=""></a>
      </div>
      <div class="instagram__item">
      <a href="#"><img src="img/about/inst_2.jpg" alt=""></a>
      </div>
      <div class="instagram__item">
      <a href="#"><img src="img/about/inst_3.jpg" alt=""></a>
      </div>
      <div class="instagram__item">
      <a href="#"><img src="img/about/inst_4.jpg" alt=""></a>
      </div>
      <div class="instagram__item">
      <a href="#"><img src="img/about/inst_5.jpg" alt=""></a>
      </div>
    </div>
    `
  }
}

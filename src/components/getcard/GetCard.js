import {AppComponent} from '@core/AppComponent'

export class GetCard extends AppComponent {
  static className ='get-card'
  static tagName = 'div'
  toHTML() {
    return `
    <div class="container">
      <div class="get-card__wrap">
        <h3 class="get-card__title">
          gold card
        </h3>
        <div class="get-card__descr">discount 5% card and free shipping</div>
        <button class="get-card__button">Get card</button>
      </div>
    </div>
    `
  }
}

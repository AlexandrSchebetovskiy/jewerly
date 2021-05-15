import {AppComponent} from '@core/AppComponent'
import {$} from '@core/dom'
import {createGetCardModal} from './getCard.functions'
export class GetCard extends AppComponent {
  static className ='get-card'
  static tagName = 'div'
  constructor($root, options) {
    super($root, {
      name: 'Get-Card',
      listeners: ['click'],
      ...options
    })
  }
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
  onClick(event) {
    const $target = $(event.target)
    if ($target.is('get-card__button')) {
      createGetCardModal()
    }
  }
}

import {AppComponent} from '@core/AppComponent'

export class Memories extends AppComponent {
  static className = 'memories'
  static tagName = 'div'

  constructor($root, options) {
    super($root, {
      name: 'About',
      ...options
    })
  }
  toHTML() {
    return `
    <div class="memories__wrap">
      <h2 class="memories__title">
        charmed <br> memories
      </h2>
      <div class="memories__descr">Lorem ipsum dolor sit 
      amet consectetur adipisicing elit.
       Nam officia possimus tenetur soluta perferendis commodi?</div>
      <button class="memories__button"><a href="#store">Shop now</a></button>
    </div>
    `
  }
}

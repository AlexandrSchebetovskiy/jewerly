import {AppComponent} from '@core/AppComponent'

export class Tiles extends AppComponent {
  static className ='tiles'
  static tagName = 'section'
  constructor($root, options) {
    super($root, {
      name: 'Store',
      ...options
    })
  }
  toHTML() {
    return `
    <div class="container">
      <div class="tiles__wrap">
          
          <a id="watches" href="#" class="tile">
          <h3 class="tile__title">watches</h3>
          <span class="tile__descr">shop watches</span>
          </a>
          <a id="necklaces" href="#" class="tile">
            <h3 class="tile__title">pedants<br>necklaces</h3>
            <span class="tile__descr">shop now</span>
          </a>
          <a id="earings" href="#" class="tile">
            <h3 class="tile__title">earings</h3>
            <span class="tile__descr">shop earings</span>
          </a>
          <a id="for-him" href="#" class="tile">
            <h3 class="tile__title">for him</h3>
            <span class="tile__descr">shop now</span>
          </a>
          <a id="accesories" href="#" class="tile">
            <h3 class="tile__title">accesories</h3>
            <span class="tile__descr">shop now</span>
          </a>
      </div>
      <div class="rings">
        <div class="rings__wrap">
            <h3 class="rings__title">
              SHOP <br> All RINGS
            </h3>
            <span class="rings__descr">CHOOSE YOUR DESIGN, 
              YOUR GEMS, YOUR METAL, YOUR MESSAGE
            </span>
            <button class="rings__button">Shop All Rings</button>
        </div>
      </div>
    </div>
    `
  }
}

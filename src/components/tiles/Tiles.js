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
          
          <a id="watches" href="#store/watches" class="tile">
          <h3 class="tile__title">watches</h3>
          <span class="tile__descr">shop watches</span>
          </a>
          <a id="necklaces" href="#store/necklaces" class="tile">
            <h3 class="tile__title">pedants<br>necklaces</h3>
            <span class="tile__descr">shop now</span>
          </a>
          <a id="earings" href="#store/earings" class="tile">
            <h3 class="tile__title">earings</h3>
            <span class="tile__descr">shop earings</span>
          </a>
          <a id="for-him" href="#store/braceletes" class="tile">
            <h3 class="tile__title">Bracletes</h3>
            <span class="tile__descr">shop now</span>
          </a>
          <a id="accesories" href="#store/all" class="tile">
            <h3 class="tile__title">Jewerly</h3>
            <span class="tile__descr">See all</span>
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
            <button class="rings__button">
              <a href="#store/rings">Shop All Rings</a>
            </button>
        </div>
      </div>
    </div>
    `
  }
}

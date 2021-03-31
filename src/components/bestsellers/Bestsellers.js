import {AppComponent} from '@core/AppComponent'
// import {bestsellersTemplate} from './bestsellers.template'

export class Bestsellers extends AppComponent {
  static className ='bestsellers'
  static tagName = 'div'
  constructor($root) {
    super($root, {
      name: 'Bestsellers'
    })
  }
  toHTML() {
    return `
    <div class="container">
      <h2 class="bestsellers__title">best sellers</h2>
      <div class="bestsellers__wrap">

      </div>
    </div>
    `
  }
}

// export const bestsellersData =
// [
//   {
//     id: 1,
//     name: 'Golden Earing',
//     price: '338.00',
//     img: 'img/cards/product-23.png'
//   },
//   {
//     id: 2,
//     name: 'Silver Earing',
//     price: '128.00',
//     img: 'img/cards/product-27.png'
//   },
//   {
//     id: 3,
//     name: 'Platinum Earing',
//     price: '236.00',
//     img: 'img/cards/product-24.png'
//   },
//   {
//     id: 4,
//     name: 'Golden Earing with Gem',
//     price: '550.00',
//     img: 'img/cards/product-26.png'
//   }
// ]

// export const storeData =
// [

// ]


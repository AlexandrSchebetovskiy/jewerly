import {LocalStorageUtil} from '@core/LocalStorageUtil'
import {Store} from './Store'
export function getStoreTemplate(products) {
  const Storage = new LocalStorageUtil()
  const productsStore = Storage.getProducts()
  console.log('products', productsStore)
  let template = ''
  products.forEach(product =>{
    let activeText = ''
    let activeClass = ''
    if (productsStore.indexOf(product.id) === -1) {
      console.log(true);
      activeText = Store.labelAdd
    } else {
      console.log(false);
      activeText = Store.labelRemove
      activeClass = Store.classNameAcvite
    }
    template +=`
    <div data-id="${product.id}"data-type="${product.type}"class="store__item" >
          <div class="store__img">
            <img src=${product.img} alt="">
          </div>
          <div class="store__content">
            <h3 class="store__title store__title--item ">${product.name}</h3>
            <div class="store__price">${product.price} $</div>
            <button class="store__button ${activeClass}">${activeText}</button>
          </div>
        </div>
    `
  })
  return template
}


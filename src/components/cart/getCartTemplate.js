import {localStorageUtil} from '@core/LocalStorageUtil'

export function getCartTemplate() {
  const cart = localStorageUtil.getProducts()
  console.log(cart);
  let template = ''
  if (!cart.length) {
    template = `
      <p class="cart--empty">
        Cart is empty
      </p>
      <div class="cart__line"></div>
    `
    return template
  }
  // eslint-disable-next-line prefer-const
  cart.forEach(item => {
    template += `
    <div class="cart__item">
      <div class="cart__img"> 
        <img src="${item.img}" alt="">
      </div>
      <div class="cart__name">${item.name}</div>
      <div class="cart__price">${item.price} $</div>
      <div class="cart__count">${item.count}</div>

      <button class="cart__btn" data-id="${item.id}">Remove</button>
    </div>
    
    `
  })
  return template
}

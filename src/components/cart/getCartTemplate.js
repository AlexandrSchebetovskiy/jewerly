import {localStorageUtil} from '@core/LocalStorageUtil'

export function getCartTemplate(store) {
  const cart = localStorageUtil.getProducts()
  console.log(cart);
  let template = ''
  if (!cart.length) {
    template = `
      <p class="cart--empty">
        Cart is empty
      </p>
    `
    return template
  }
  // eslint-disable-next-line prefer-const
  let cartItems = []
  cart.forEach(itemId => {
    const candidate = store.find(i => i.id === itemId)
    cartItems.push(candidate)
  })
  cartItems.forEach(item => {
    template += `
    <div class="cart__item">
      <div class="cart__img"> 
        <img src="${item.img}" alt="">
      </div>
      <div class="cart__name">${item.name}</div>
      <div class="cart__price">${item.price} $</div>
      <button class="cart__btn">Remove</button>
    </div>
    
    `
  })
  return template
}

import {localStorageUtil} from '@core/LocalStorageUtil';

export function getCount() {
  const count = localStorageUtil.getProducts().length
  return count
}
export function getTotalPrice() {
  const cart = localStorageUtil.getProducts()
  let totalPrice = 0
  cart.forEach(i => {
    totalPrice += i.count*i.price
  })
  return totalPrice
}

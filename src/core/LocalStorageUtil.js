

export class LocalStorageUtil {
  constructor() {
    this.keyName = 'products'
  }
  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName)
    if (productsLocalStorage !==null) {
      return JSON.parse(productsLocalStorage)
    }
    return []
  }
  putProducts(item) {
    // eslint-disable-next-line prefer-const
    let products = this.getProducts()
    let pushProduct = false
    const index = products.findIndex(i => i.id === item.id)
    if (index === -1) {
      products.push(item)
      pushProduct = true
    } else {
      products[index].count +=1
    }
    localStorage.setItem(this.keyName, JSON.stringify(products))
    return {products, pushProduct}
  }
  removeOne(id) {
    // eslint-disable-next-line prefer-const
    let products = this.getProducts()
    const index = products.findIndex(i => i.id === id)
    if (index === -1) {
      return false
    }
    if (+products[index].count === 1) {
      products.splice(index, 1)
    } else {
      products[index].count--
    }
    localStorage.setItem(this.keyName, JSON.stringify(products))
    return {products}
  }
}
export const localStorageUtil = new LocalStorageUtil()


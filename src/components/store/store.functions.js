import {$} from '@core/dom'
import {filter, showItems} from '@core/utils'
import {localStorageUtil} from '@core/LocalStorageUtil'
// import {Store} from './Store'
export function filterItems(type, root) {
  const store = $(`.${root}__item`).$el
  switch (type) {
    case 'all': showItems(store)
      break
    case 'rings': filter('ring', store)
      break
    case 'earings': filter('earring', store)
      break
    case 'necklaces': filter('necklace', store)
      break
    case 'watches': filter('watch', store)
      break
    case 'braceletes': filter('bracelet', store)
      break
  }
}
export function handleSetLocationStorage(element, item) {
  const {pushProducts, products} = localStorageUtil.putProducts(item)

  return {products}
}


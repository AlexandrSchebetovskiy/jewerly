import {$} from '@core/dom'
export function getMethod(string) {
  return 'on' + capitalize(string)
}
function capitalize(string = 'string') {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}
export function sliceText(str, num = 200) {
  return str.length < num ? str : `${str.slice(0, num)}...`
}
export function filter(type, store) {
  hideItems(store)
  const newStore = store.filter(item => item.dataset.type === type)
  showItems(newStore)
}

export function showItems(store) {
  store.forEach(item => {
    $(item).css({display: 'block', opacity: 1})
  })
}
function hideItems(store) {
  store.forEach(item => {
    $(item).css({display: 'none', opacity: 0})
  })
}
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


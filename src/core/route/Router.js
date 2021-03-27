import {$} from '@core/dom'
import {ActiveRoute} from './ActiveRoute'

export class Router {
  constructor(selector, routes) {
    if (!selector) {
      throw new Error('Selector is not provided for Router!')
    }
    this.$placeholder = $(selector)
    this.routes = routes
    this.init()
    this.changePageHandler = this.changePageHandler.bind()
  }
  init() {
    window.addEventListener('hashchange', this.changePageHandler)
    this.changePageHandler()
  }
  destroy() {
    window.removeEventListener('hashchange', this.changePageHandler)
  }
  changePageHandler() {
    console.log(ActiveRoute.path)
    console.log(ActiveRoute.param)
    this.$placeholder.html(`<h1>${ActiveRoute.path}</h1>`)
  }
}

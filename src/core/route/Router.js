
import {$} from '@core/dom'
import {ActiveRoute} from './ActiveRoute'
export class Router {
  constructor(selector, routes) {
    if (!selector) {
      throw new Error('Selector is not provided in Router!')
    }
    this.$palceholder = $(selector)
    this.routes = routes
    this.page = null
    this.changePageHandler = this.changePageHandler.bind(this)
    this.init()
  }
  init() {
    window.addEventListener('hashchange', this.changePageHandler)
    this.changePageHandler()
  }
  changePageHandler() {
    console.log('this', this);
    if (this.page) {
      this.page.destroy()
    }
    this.$palceholder.clear()

    console.log(this.getRoute())
    const Page = this.getRoute()

    this.page = new Page()

    this.$palceholder.append(this.page.getRoot())

    this.page.afterRender()
  }
  destroy() {
    window.removeEventListener('hashchange', this.changePageHandler)
  }
  getRoute() {
    switch (ActiveRoute.path) {
      case 'about':
        return this.routes.about
      case 'blog':
        return this.routes.blog
      case 'gallery':
        return this.routes.gallery
      case 'store':
        return this.routes.store
      case 'contacts':
        return this.routes.contacts
      case 'home':
        return this.routes.home
      case '':
        return this.routes.home
      default:
        return this.routes.notFound
    }
  }
}


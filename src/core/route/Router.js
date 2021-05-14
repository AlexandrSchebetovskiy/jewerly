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
    // this.data = data
    this.init()
  }
  init() {
    window.addEventListener('hashchange', this.changePageHandler)
    this.changePageHandler()
  }
  changePageHandler() {
    if (this.page) {
      this.page.destroy()
    }
    this.$palceholder.clear()


    const Page = this.getRoute()
    const Url = Page.url
    if (!Url) {
      this.page = new Page()
      this.$palceholder.append(this.page.getRoot())
      this.page.afterRender()
    } else {
      fetch(Url)
          .then(res => res.json())
          .then(data => {
            this.page = new Page(data)

            this.$palceholder.append(this.page.getRoot())
            this.page.afterRender()
          })
    }
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
      case 'cart':
        return this.routes.cart
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


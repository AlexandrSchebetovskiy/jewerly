import {$} from '@core/dom'

export class BlogPageComponent {
  constructor(options) {
    this.components = options.components
    this.className = 'BlogPage'
  }
  getRoot() {
    const $root = $.create('div', this.className)

    this.components = this.components.map(Component => {
      const $el = $.create(Component.tagName, Component.className)

      const component = new Component($el)
      $el.html(component.toHTML())
      $root.append($el)

      return component
    })
    return $root
  }
  init() {
    this.components.forEach(component => component.init())
  }
  destroy() {
    this.components.forEach(component => component.destroy())
  }
}

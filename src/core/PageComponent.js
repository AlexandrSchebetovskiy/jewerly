import {$} from '@core/dom'
export class PageComponent {
  constructor(components, className, data) {
    this.components = components
    this.className = className
    this.data = data
  }
  getRoot() {
    console.log('PageComponent', this.data);
    const $root = $.create('div', this.className)

    this.components = this.components.map(Component => {
      const $el = $.create(Component.tagName, Component.className)

      const component = new Component($el, this.data)
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

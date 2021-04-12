import {$} from '@core/dom'
import {Emitter} from './Emitter'
export class PageComponent {
  constructor(components, className, data) {
    this.components = components
    this.className = className
    this.data = data
    this.emitter = new Emitter()
  }
  getRoot() {
    const $root = $.create('div', this.className)
    const componentOptions = {data: this.data, emitter: this.emitter}
    this.components = this.components.map(Component => {
      const $el = $.create(Component.tagName, Component.className)

      const component = new Component($el, componentOptions)
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

/* eslint-disable no-debugger */

import {$} from '@core/dom'
export class Home {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
    this.className = 'HomePage'
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

  render() {
    this.$el.append(this.getRoot())
    this.components.forEach(component => component.init())
  }
}

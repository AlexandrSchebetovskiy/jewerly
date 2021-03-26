import {DomListener} from '@core/DomListener'

export class AppComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
  }
  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {}
}

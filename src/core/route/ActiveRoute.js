export class ActiveRoute {
  static get path() {
    return window.location.hash.slice(1).split('/')[0]
  }
  static get param() {
    return window.location.hash.split('/')[1] || ''
  }
}

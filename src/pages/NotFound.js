import {Page} from '@core/Page'
import {$} from '@core/dom'
export class NotFound extends Page {
  getRoot() {
    const $node = $.create('div', 'not-found')
    const html = `
    <div class="not-found__wrap">
        <h1 class="not-found__title">Error 404.</h1>
        <div class="not-found__text">This page doesn't exist or unavaible</div>
        <a class="not-found__button" href="#home">Go to home page</a>
      </div>
    `
    return $node.html(html)
  }
}

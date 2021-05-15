import {AppComponent} from '@core/AppComponent'
import {getArticleTemplate} from './article.functions'

export class Article extends AppComponent {
  static className = 'article'
  static tagName = 'section'

  constructor($root, options) {
    super($root, {
      name: 'About',
      ...options
    })
    this.data = options.data
    this.param = options.param
  }
  toHTML() {
    return `
    <div class="container">
     ${getArticleTemplate(this.data, this.param)}
    </div>

    `
  }
}

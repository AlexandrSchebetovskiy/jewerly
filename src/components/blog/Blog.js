import {AppComponent} from '@core/AppComponent'
import {getBlogTemplate} from './blog.template'
export class Blog extends AppComponent {
  static className ='blog'
  static tagName = 'section'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options
    })
    this.data = options.data
  }

  toHTML() {
    return `
    <h2 class="blog__title">Posts</h2>
    <div class="blog__wrap">
      ${getBlogTemplate(this.data)}
    </div>
    `
  }
}

import {AppComponent} from '@core/AppComponent'
import {getBlogTemplate} from './blog.template'
export class Blog extends AppComponent {
  static className ='blog'
  static tagName = 'section'

  constructor($root, data) {
    super($root, {
      name: 'Header'
    })
    this.data = data
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

import {AppComponent} from '@core/AppComponent'
import {getPostsTemplate} from './posts.template'

// import {getPostsTemplate} from './posts.template'

export class Posts extends AppComponent {
  static className ='posts'
  static tagName = 'section'
  constructor($root, options) {
    super($root, {
      name: 'Posts',
      ...options
    })
    this.data = options.data.blog
  }
  toHTML() {
    return `
    <div class="container">
      <h2 class="posts__title">our blog</h2>
      <div class="posts__wrap">
       ${getPostsTemplate(this.data)}
      </div>
    </div>
    `
  }
}



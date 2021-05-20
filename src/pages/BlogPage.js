import {BlogPageComponent} from '@/components/PageComponents/BlogPageComponent';
import {Page} from '@core/Page'
import {Header} from '@/components/header/Header'
import {Footer} from '@/components/footer/Footer'
import {Blog} from '@/components/blog/Blog'
export class BlogPage extends Page {
  static url = '/server/blog'
  constructor(data = {}) {
    super()
    this.data = data
  }
  getRoot() {
    this.blog = new BlogPageComponent({
      components: [Header, Blog, Footer],
      data: this.data
    })
    return this.blog.getRoot()
  }
  afterRender() {
    console.log('afterRender');
    this.blog.init()
  }
  destroy() {
    this.blog.destroy()
  }
}

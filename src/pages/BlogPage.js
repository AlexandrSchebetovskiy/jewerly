import {BlogPageComponent} from '@/components/PageComponents/BlogPageComponent';
import {Page} from '@core/Page'
import {Header} from '@/components/header/Header'
import {Footer} from '@/components/footer/Footer'
import {Blog} from '@/components/blog/Blog'
export class BlogPage extends Page {
  getRoot() {
    this.blog = new BlogPageComponent({
      components: [Header, Blog, Footer]
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

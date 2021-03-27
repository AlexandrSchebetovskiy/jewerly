import {BlogPageComponent} from '@/components/PageComponents/BlogPageComponent';
import {Page} from '@core/Page'
import {Header} from '@/components/header/Header'
import {Footer} from '@/components/footer/Footer'
import {Blog} from '@/components/blog/Blog'
export class BlogPage extends Page {
  getRoot() {
    this.home = new BlogPageComponent({
      components: [Header, Blog, Footer]
    })
    return this.home.getRoot()
  }
  afterRender() {
    console.log('afterRender');
    this.home.init()
  }
  destroy() {
    this.home.destroy()
  }
}

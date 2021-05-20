import {Page} from '@core/Page'
import {Header} from '@/components/header/Header'
import {Footer} from '@/components/footer/Footer'
import {Article} from '@/components/article/Article'
// eslint-disable-next-line max-len
import {ArticlePageComponent} from '@/components/PageComponents/ArticlePageComponent'
export class ArticlePage extends Page {
  static url = '/server/blog'
  constructor(data = {}, param) {
    super()
    this.data = data
    this.param = param
  }
  getRoot() {
    this.about = new ArticlePageComponent({
      components: [
        Header, Article, Footer
      ],
      data: this.data,
      param: this.param
    })
    return this.about.getRoot()
  }
  afterRender() {
    this.about.init()
  }
  destroy() {
    this.about.destroy()
  }
}

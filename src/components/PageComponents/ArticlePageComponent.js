import {PageComponent} from '@core/PageComponent'
export class ArticlePageComponent extends PageComponent {
  constructor(options) {
    super(options.components, 'ArticlePage', options.data, options.param)
  }
}

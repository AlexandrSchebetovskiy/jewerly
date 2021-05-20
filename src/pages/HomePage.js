import {Page} from '@core/Page'
// import {$} from '@core/dom'
import {Header} from '@/components/header/Header'
import {Promo} from '@/components/promo/Promo'
import {Tiles} from '@/components/tiles/Tiles'
import {Bestsellers} from '@/components/bestsellers/Bestsellers'
import {GetCard} from '@/components/getcard/GetCard'
import {Posts} from '@/components/posts/Posts'
import {Footer} from '@/components/footer/Footer'
import {HomePageComponent} from '@/components/PageComponents/HomePageComponent'

export class HomePage extends Page {
  static url = '/server/home'
  constructor(data = {}) {
    super()
    this.data = data
  }
  getRoot() {
    this.home = new HomePageComponent({
      components: [Header, Promo, Tiles, Bestsellers, GetCard, Posts, Footer],
      data: this.data
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

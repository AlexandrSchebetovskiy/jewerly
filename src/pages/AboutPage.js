
import {Page} from '@core/Page'
// eslint-disable-next-line max-len
import {AboutPageComponent} from '@/components/PageComponents/AboutPageComponent'
import {Header} from '@/components/header/Header'
import {About} from '@/components/about/About'
import {Partners} from '@/components/partners/Partners'
import {Memories} from '@/components/memories/Memories'
import {History} from '@/components/history/History'
import {Instagramm} from '@/components/instagramm/Instagramm'
import {Footer} from '@/components/footer/Footer'

export class AboutPage extends Page {
  getRoot() {
    this.home = new AboutPageComponent({
      components: [
        Header, About, Partners, Memories, History, Instagramm, Footer
      ]
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

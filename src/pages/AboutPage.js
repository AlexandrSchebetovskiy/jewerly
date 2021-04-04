
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
  static url = 'server/About.json'
  constructor(data = {}) {
    super()
    this.data = data
  }
  getRoot() {
    this.about = new AboutPageComponent({
      components: [
        Header, About, Partners, Memories, History, Instagramm, Footer
      ],
      data: this.data
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

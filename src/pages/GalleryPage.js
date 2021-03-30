import {GalleryPageComponent} from
  '@/components/PageComponents/GalleryPageComponent';
import {Page} from '@core/Page'
import {Header} from '@/components/header/Header'
import {Footer} from '@/components/footer/Footer'
import {Gallery} from '@/components/gallery/Gallery'

export class GalleryPage extends Page {
  getRoot() {
    this.gallery = new GalleryPageComponent({
      components: [Header, Gallery, Footer]
    })
    return this.gallery.getRoot()
  }
  afterRender() {
    console.log('afterRender');
    this.gallery.init()
  }
  destroy() {
    this.gallery.destroy()
  }
}

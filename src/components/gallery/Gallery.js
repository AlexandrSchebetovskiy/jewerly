import {AppComponent} from '@core/AppComponent'
import {getGalleryTemplate} from './gallery.template'

export class Gallery extends AppComponent {
  static className ='gallery'
  static tagName = 'section'

  constructor($root, data) {
    super($root, {
      name: 'Gallery'
    })
    this.data = data
  }

  toHTML() {
    return `
    <div class="container">
      <h2 class="gallery__title">Gallery</h2>
      <ul class="gallery__nav">
        <li class="gallery__nav-item">show all</li>
        <li class="gallery__nav-item">earings</li>
        <li class="gallery__nav-item">diamonds</li>
        <li class="gallery__nav-item">rings</li>
        <li class="gallery__nav-item">necklaces</li>
        <li class="gallery__nav-item">platinum</li>
      </ul>
      <div class="gallery__grid">
        ${getGalleryTemplate(this.data)}
      </div>
    </div>
    `
  }
}

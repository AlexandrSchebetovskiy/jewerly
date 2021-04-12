import {AppComponent} from '@core/AppComponent'
import {getGalleryTemplate} from './gallery.template'
import {createGalleryModal} from './gallery.functions'
import {filterItems} from '@core/utils'
import {$} from '@core/dom'

export class Gallery extends AppComponent {
  static className ='gallery'
  static tagName = 'section'

  constructor($root, options) {
    super($root, {
      name: 'Gallery',
      listeners: ['click'],
      ...options
    })
    this.data = options.data
    this.onClick = this.onClick.bind(this)
  }

  toHTML() {
    return `
    <div class="container">
      <h2 class="gallery__title">Gallery</h2>
      <ul class="gallery__nav">
        <li class="gallery__nav-item"data-type="all">show all</li>
        <li class="gallery__nav-item"data-type="earings">earings</li>
        <li class="gallery__nav-item"data-type="diamonds">diamonds</li>
        <li class="gallery__nav-item"data-type="rings">rings</li>
        <li class="gallery__nav-item"data-type="necklaces">necklaces</li>
        <li class="gallery__nav-item"data-type="platinum">platinum</li>
      </ul>
      <div class="gallery__grid">
        ${getGalleryTemplate(this.data)}
      </div>
    </div>
    `
  }
  onClick(event) {
    if ($(event.target).is('gallery__nav-item')) {
      const button = $(event.target)
      const type = button.data.type
      filterItems(type, 'gallery')
    }
    if ($(event.target).is('image')) {
      const item = event.target.parentElement
      const id = $(item).data.id
      createGalleryModal(id, this.data)
    }
  }
}

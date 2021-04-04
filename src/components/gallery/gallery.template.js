export function getGalleryTemplate(data) {
  let template = ''
  data.forEach(item => {
    template += `
    <div data-id="${item.id}"class="gallery__item">
      <img src=${item.img} alt="">
    </div>
    `
  })
  return template
}

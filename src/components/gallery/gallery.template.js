export function getGalleryTemplate(data) {
  let template = ''
  data.forEach(item => {
    template += `
    <div data-id="${item.id}"data-type="${item.type}"class="gallery__item">
      <img class="image"src=${item.img} alt="">
    </div>
    `
  })
  return template
}

export function getInstTemplate(data) {
  let template = ''
  data.forEach(item => {
    template += `
    <div class="instagram__item">
      <a href=${item.instLink}><img src=${item.img} alt=""></a>
      </div>
    `
  })
  return template
}


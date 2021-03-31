
export function bestsellersTemplate(data) {
  let template = ''
  data.forEach(el => {
    template += `
    <div data-id=${el.id} class="card">
      <div class="card__img">
        <img src=${el.img} alt="">
      </div>
      <div class="card__content">
        <h3 class="card__title">${el.name}</h3>
        <div class="card__price">${el.price} $</div>
        <button class="card__button">buy now</button>
      </div>
    </div>
    `
  })
  return template
}

import {sliceText} from '@core/utils'
export function getPostsTemplate(data) {
  let template = ''
  data.forEach(el => {
    template += `<article class="article">
    <div class="article__date">
      <div class="article__day">${el.day}</div>
      <div class="article__month">${el.month}</div>
    </div>
    <div class="article__content">
    <h3 class="article__title">${el.title}</h3>
    <div class="article__descr">${sliceText(el.text, 80)}</div>
    <button class="article__button">read more</button>
    </div>
    </article>`
  })
  return template
}


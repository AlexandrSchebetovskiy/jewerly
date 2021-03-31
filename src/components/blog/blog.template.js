export function getBlogTemplate(posts) {
  let template = ''
  posts.forEach(post => {
    template += `
    <article data-id="${post.id}" class="article">
        <div class="article__content">
          <a class="article__title">
            <h3>${post.title}</h3>
          </a>
          <div class="article__date">${post.date}</div>
          <div class="article__text">${sliceText(post.text)}</div>
          <button class="article__button">read more</button>
        </div>
        <div class="article__img">
          <img src=${post.img} alt="">
        </div>
      </article>
    `
  })
  console.log(template)
  return template
}
function sliceText(str) {
  return str.length < 200 ? str : `${str.slice(0, 200)}...`
}

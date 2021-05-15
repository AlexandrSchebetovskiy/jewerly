export function getArticleTemplate(posts, id) {
  const post = posts.filter(p => p.id === id)[0]
  return `
  <h2 class="article__title">${post.title}</h2>
  <div class="article__wrap">
    <div class="article__img"><img src="${post.img}" alt=""></div>
    <div class="article__date">
      ${post.date.month} ${post.date.day}, ${post.date.year}
    </div>
    <div class="article__text">${post.text}</div>
  </div>
  `
}

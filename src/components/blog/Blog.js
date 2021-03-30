import {AppComponent} from '@core/AppComponent'
export class Blog extends AppComponent {
  static className ='blog'
  static tagName = 'section'

  constructor($root) {
    super($root, {
      name: 'Header'
    })
  }

  toHTML() {
    return `
    <h2 class="blog__title">Posts</h2>
    <div class="blog__wrap">
      <article class="article">
        <div class="article__content">
          <a class="article__title">
            <h3>Jewerly for sunshine</h3>
          </a>
          <div class="article__date">September 28, 2020</div>
          <div class="article__text">Lorem ipsum 
          dolor sit amet consectetur adipisicing elit. 
          Distinctio eum, possimus corrupti quaerat quas 
          repellat. Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Voluptatem enim ipsam similique 
          a neque voluptate accusantium beatae, recusandae 
          dolore autem excepturi tempore minus deleniti, repellat
           maxime obcaecati quae. Provident, voluptates...</div>
          <button class="article__button">read more</button>
        </div>
        <div class="article__img">
          <img src="img/blog/image-18.jpg" alt="">
        </div>
      </article>
      <article class="article">
        <div class="article__content">
          <a class="article__title">
            <h3>Jewerly for sunshine</h3>
          </a>
          <div class="article__date">September 28, 2020</div>
          <div class="article__text">Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Distinctio eum, possimus
           corrupti quaerat quas repellat. Lorem ipsum dolor sit 
           amet consectetur adipisicing elit. Voluptatem enim ipsam s
           imilique a neque voluptate accusantium beatae, recusandae 
           dolore autem excepturi tempore minus deleniti, repellat 
           maxime obcaecati quae. Provident, voluptates...</div>
          <button class="article__button">read more</button>
        </div>
        <div class="article__img">
          <img src="img/blog/image-8.jpg" alt="">
        </div>
      </article>
    </div>
    `
  }
}

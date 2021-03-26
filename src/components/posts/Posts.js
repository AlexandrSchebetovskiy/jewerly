import {AppComponent} from '@core/AppComponent'

export class Posts extends AppComponent {
  static className ='posts'
  static tagName = 'section'
  toHTML() {
    return `
    <div class="container">
      <h2 class="posts__title">our blog</h2>
      <div class="posts__wrap">
        <article class="article">
          <div class="article__date">
            <div class="article__day">31</div>
            <div class="article__month">january</div>
          </div>
         <div class="article__content">
          <h3 class="article__title">Best europen Jewerly brands</h3>
          <div class="article__descr">Lorem ipsum dolor sit, amet consectetur 
          adipisicing elit. Magnam, quo...</div>
          <button class="article__button">read more</button>
         </div>
        </article>
        <article class="article">
          <div class="article__date">
            <div class="article__day">31</div>
            <div class="article__month">january</div>
          </div>
          <div class="article__content">
            <h3 class="article__title">Best europen Jewerly brands</h3>
            <div class="article__descr">Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Magnam, quo...</div>
            <button class="article__button">read more</button>
           </div>
        </article>
        <article class="article">
          <div class="article__date">
            <div class="article__day">31</div>
            <div class="article__month">january</div>
          </div>
          <div class="article__content">
            <h3 class="article__title">Best europen Jewerly brands</h3>
            <div class="article__descr">Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Magnam, quo...</div>
            <button class="article__button">read more</button>
           </div>
        </article>
        <article class="article">
          <div class="article__date">
            <div class="article__day">31</div>
            <div class="article__month">january</div>
          </div>
          <div class="article__content">
            <h3 class="article__title">Best europen Jewerly brands</h3>
            <div class="article__descr">Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Magnam, quo...</div>
            <button class="article__button">read more</button>
           </div>
        </article>
      </div>
    </div>
    `
  }
}

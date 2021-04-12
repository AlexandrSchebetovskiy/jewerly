import {AppComponent} from '@core/AppComponent'
import {$} from '@core/dom'
export class History extends AppComponent {
  static className ='history'
  static tagName = 'div'

  constructor($root, options) {
    super($root, {
      name: 'History',
      listeners: ['click'],
      ...options
    })
  }

  toHTML() {
    return `
    <div class="container">
      <div class="history__wrap">
        <div class="history__block">
          <h2 class="history__title">how it was</h2>
          <div class="history__descr">Our Hisrory. 
          Lorem ipsum dolor sit amet.</div>
          <div class="history__years">

            <div data-year="2009"
            class="history__year history__year--active">2009</div>

            <div  data-year="2011" class="history__year">2011</div>

            <div data-year="2016" class="history__year">2016</div>

            <div data-year="2018" class="history__year">2018</div>
          </div>
          
          <div data-year="2009" class="history__text">Morbi tellus nisl, 
            accumsan quis bibendum in, vulputate nec arcu. 
            Fusce et purus tellus. Quisque neque mi, sollicitudin 
            in nibh eget, euismod blandit mauris. Sed accumsan maximus
            fermentum. Pellentesque leo tortor, accumsan et 
            justo aliquet, iaculis malesuada urna.
            <br><br>
            Suspendisse nunc libero, vulputate a dui in, 
            tempor faucibus erat. Ut euismod malesuada neque in placerat.
          </div>

          <div data-year="2011" style="display:none"class="history__text">
            
            accumsan quis bibendum in, vulputate nec arcu. 
            Fusce et purus tellus. Quisque neque mi, sollicitudin 
            in nibh eget, euismod blandit mauris. Sed accumsan maximus
            fermentum. Pellentesque leo tortor, accumsan et 
            justo aliquet, iaculis malesuada urna.
            <br><br>
            Suspendisse nunc libero, vulputate a dui in, 
            tempor faucibus erat. Ut euismod malesuada neque in placerat.
          </div>
          <div data-year="2016" style="display:none"class="history__text">
             in, vulputate nec arcu. 
            Fusce et purus tellus. Quisque neque mi, sollicitudin 
            in nibh eget, euismod blandit mauris. Sed accumsan maximus
            fermentum. Pellentesque leo tortor, accumsan et 
            justo aliquet, iaculis malesuada urna.
            <br><br>
            Suspendisse nunc libero, vulputate a dui in, 
            tempor faucibus erat. Ut euismod malesuada neque in placerat.
          </div>
          <div data-year="2018" style="display:none"class="history__text">
            Morbi Quisque neque mi, sollicitudin 
            in nibh eget, euismod blandit mauris. Sed accumsan maximus
            fermentum. Pellentesque leo tortor, accumsan et 
            justo aliquet, iaculis malesuada urna.
            <br><br>
            Suspendisse nunc libero, vulputate a dui in, 
            tempor faucibus erat. Ut euismod malesuada neque in placerat.
          </div>
          </div>
        <div class="history__img"></div>
      </div>
    </div>`
  }

  onClick(event) {
    if (event.target.classList.contains('history__year')) {
      event.preventDefault()
      const $target = $(event.target)
      const activeTabAttr = $target.data.year
      const navNeighbours = $target.neighbours()
      const contentArr = $('.history__text').$el
      contentArr.forEach((content, i) => {
        content = $(content)
        const contentAttr = content.data.year

        if (activeTabAttr === contentAttr) {
          content.css({display: 'block'})
          $target.add('history__year--active')
        } else {
          navNeighbours.forEach(el => $(el).remove('history__year--active'))
          content.css({display: 'none'})
        }
      })
    }
  }
}

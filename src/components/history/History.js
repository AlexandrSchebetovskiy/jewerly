import {AppComponent} from '@core/AppComponent'

export class History extends AppComponent {
  static className ='history'
  static tagName = 'div'

  constructor($root, data) {
    super($root, {
      name: 'History'
    })
    this.data = data
  }

  toHTML() {
    console.log(this.data, 'history');
    return `
    <div class="container">
      <div class="history__wrap">
        <div class="history__block">
          <h2 class="history__title">how it was</h2>
          <div class="history__descr">Our Hisrory. 
          Lorem ipsum dolor sit amet.</div>
          <div class="history__years">
            <div class="history__year history__year--active">2009</div>
            <div class="history__year">2011</div>
            <div class="history__year">2016</div>
            <div class="history__year">2018</div>
          </div>
          <div class="history__text">Morbi tellus nisl, 
          accumsan quis bibendum in, vulputate nec arcu. 
          Fusce et purus tellus. Quisque neque mi, sollicitudin 
          in nibh eget, euismod blandit mauris. Sed accumsan maximus
            fermentum. Pellentesque leo tortor, accumsan et 
            justo aliquet, iaculis malesuada urna.
            <br><br>
            Suspendisse nunc libero, vulputate a dui in, 
            tempor faucibus erat. Ut euismod malesuada neque in placerat.</div>
        </div>
        <div class="history__img"></div>
      </div>
    </div>`
  }
}

import {AppComponent} from '@core/AppComponent'

export class About extends AppComponent {
  static className = 'about'
  static tagName = 'section'

  constructor($root, options) {
    super($root, {
      name: 'About',
      ...options
    })
  }
  toHTML() {
    return `
    <div class="container">
      <h2 class="about__title">about us</h2>
      <div class="about__wrap">
        <div class="about__img">
        <img src="img/about/about_us.jpg" alt="founder">
        </div>
        <div class="about__text">
          <div class="about__info">
            <div class="info">
              <div class="info__title">WELCOME TO JEWERLY STORE</div>
              <div class="info__descr">
                Morbi tellus nisl, accumsan quis bibendum in,
                vulputate nec. Fusce et purus tellus. 
                Quisque neque mi, sollicitudin in 
                nibh eget, euismod blandit mauris
              </div>
              <div class="info__sign">
                <img src="img/about/signature.png" alt="sign">
              </div>
            </div>
          </div>
          <div class="about__contacts">
            <div class="contact-us">
              <h3 class="contact-us__title">CONTACT US</h3>
              <a href="tel:+78005553535" class="contact-us__tel">
                8-800-555-35-35</a>
              <a href="mailto:info@example.com" type="mail" 
              class="contact-us__mail">info@example.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}

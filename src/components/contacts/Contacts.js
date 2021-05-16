import {AppComponent} from '@core/AppComponent'
export class Contacts extends AppComponent {
  static className ='contacts'
  static tagName = 'section'

  constructor($root, options) {
    super($root, {
      name: 'Contacts',
      ...options
    })
  }

  toHTML() {
    return `
    <h2 class="contacts__title">contacts</h2>
    <div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.000566745435!2d39.379321902766726!3d48.56552059939578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x411fcf9479adcca3%3A0x2909b3f53f166746!2z0JvQndCjINC40LwuINCU0LDQu9GP!5e0!3m2!1sru!2sua!4v1617541159849!5m2!1sru!2sua" width="1920" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div class="container">
    <div class="contacts__form">
      
      <h2 class="form__title">get in touch</h2>
      <form action="/contact" method="POST" name="form" class="form">
        <input type="text" required name="name"
        class="form__input" placeholder="Your Name">
        <input type="text" required name="mail"
        class="form__input"  placeholder="Your E-Mail">
        <input id="subject" type="text" name="subj"
        class="form__input"placeholder="Subject">

        <textarea class="form__input" id="form-msg" name="msg"
        rows="3" resizable="false"placeholder="Message"></textarea>
        
        <button type="submit" 
        class="form__button">Submit</button>
      </form>
    </div>
  </div>
    </div>
    `
  }
}

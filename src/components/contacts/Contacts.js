import {AppComponent} from '@core/AppComponent'

export class Contacts extends AppComponent {
  static className ='contacts'
  static tagName = 'section'

  constructor($root) {
    super($root, {
      name: 'Contacts'
    })
  }

  toHTML() {
    return `
    <h2 class="contacts__title">contacts</h2>
    <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6653.20478790198!2d39.38308212814955!3d48.565303667859396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1616251382083!5m2!1sru!2sru" width="1920" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div class="container">
      <div class="contacts__form">
        <h2 class="form__title">get in touch</h2>
        <form action="#" class="form">
          <div class="form__wrap">
            <input type="text" class="form__input">
            <input type="text" class="form__input">
            <input id="subject" type="text" class="form__input">
            <textarea class="form__input" id="form-msg" rows="3" cols="10">
            </textarea>
          </div>
          <div class="form__agreement">
            <input name="check" type="checkbox" class="form__check">
            <label for="check">
              I agree that my submitted data is being collected and stored.
            </label>
          </div>
          <button  type="submit" class="form__button">Send message</button>
          
        </form>
      </div>
    </div>
    `
  }
}

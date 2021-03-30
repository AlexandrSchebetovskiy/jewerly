import {ContactsPageComponent} from
  '@/components/PageComponents/ContactsPageComponent'
import {Page} from '@core/Page'
import {Header} from '@/components/header/Header'
import {Footer} from '@/components/footer/Footer'
import {Contacts} from '@/components/contacts/Contacts'


export class ContactsPage extends Page {
  getRoot() {
    this.contacts = new ContactsPageComponent({
      components: [Header, Contacts, Footer]
    })
    return this.contacts.getRoot()
  }
  afterRender() {
    console.log('afterRender');
    this.contacts.init()
  }
  destroy() {
    this.contacts.destroy()
  }
}

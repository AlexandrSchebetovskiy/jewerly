import {Modal} from './Modal';

export class SuccesModal extends Modal {
  constructor($root, msg) {
    super($root)
    this.msg = msg
  }
  toHTML() {
    const className = this.msg.succes ? 'succes' : 'fail'
    return `
    <div class="modal__wrap">
      <div class="message ${className}">${this.msg.text}</div>
    </div>
    `
  }
  removeSelf() {
    setInterval(() => {
      this.destroy()
      this.$root.delete()
      window.onscroll = () =>{}
    }, 10000)
  }
}


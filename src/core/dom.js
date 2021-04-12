class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
    ? document.querySelectorAll(selector).length === 1
      ? document.querySelector(selector)
      : Array.from(document.querySelectorAll(selector))
    : selector
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }
  addHTML(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML += html
      return this
    }
    return this.$el.outerHTML.trim()
  }
  clear() {
    this.html('')
    return this
  }
  delete() {
    this.$el.remove()
  }
  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }
    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }
  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }
  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }
  get data() {
    return this.$el.dataset
  }
  css(styles = {}) {
    Object
        .keys(styles)
        .forEach(key => {
          this.$el.style[key] = styles[key]
        })
    return this
  }
  add(className) {
    this.$el.classList.add(className)
  }
  remove(className) {
    this.$el.classList.remove(className)
  }
  neighbours() {
    const arr = Array.from(this.$el.parentElement.children)
    const i = arr.indexOf(this.$el)
    if (i >= 0) {
      arr.splice(i, 1);
    }
    return arr
  }
  closest(selector) {
    return new Dom(this.$el.closest(selector))
  }
  is(selector) {
    return this.$el.classList.contains(selector)
  }
  attr(name, value) {
    if (value) {
      this.$el.setAttribute(name, value)
      return this
    }
    return this.$el.getAttribute(name)
  }
}


export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}

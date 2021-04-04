export function getStoreTemplate(products) {
  let template = ''
  products.forEach(product =>{
    console.log(product.img);
    template +=`
    <div data-id ="${product.id}"class="store__item" >
          <div class="store__img">
            <img src=${product.img} alt="">
          </div>
          <div class="store__content">
            <h3 class="store__title store__title--item ">${product.name}</h3>
            <div class="store__price">${product.price} $</div>
            <button class="store__button">buy now</button>
          </div>
        </div>
    `
  })
  return template
}

class MenuCard {
  constructor(
    src,
    title,
    srcStock,
    stock,
    price,
    rate,
    orders,
    parentSelector
  ) {
    this.src = src;
    this.title = title;
    this.srcStock = srcStock;
    this.stock = stock;
    this.price = price;
    this.rate = rate;
    this.orders = orders;
    this.parent = document.querySelector(parentSelector);
    this.transfer = 27;
    this.changeToUAH();
  }

  changeToUAH() {
    this.price = this.price * this.transfer;
  }

  render() {
    const element = document.createElement('div');
    element.classList.add('cards__item');
    element.innerHTML = `
    <div class="cards__item">
                                <div class="card">
                                    <div class="card__img">
                                        <img src=${this.src} alt='iphone'>
                                    </div>
                                    <div class="card__content">
                                        <h4 class="card__title">${this.title}</h4>
                                        <div class="card__stock">
                                        <img src=${this.srcStock} alt="close">
                                            <span>${this.stock}</span> left
                                            in stock
                                        </div>
                                        <div class="card__price">Price <span>${this.price}$</span></div>
                                        <button class="btn card__btn" type="submit">Add to cart</button>
                                    </div>
                                    <div class="reviews">
                                        <div class="reviews__statistic">
                                            <div class="reviews__proc"><span>${this.rate}%</span> Positive reviews</div>
                                            <div class="reviews__avarage">Above avarage</div>
                                        </div>
                                        <div class="reviews__orders">
                                            <span class="reviews__amount">${this.orders}</span>
                                            <span>orders</span>
                                        </div>
                                        <span class="heart">
                                        <img src="./img/icons/like_filled.svg" alt="heart"></span>
                                    </div>
                                    <span class="like">
                                    <img src="./img/icons/like_empty.svg" alt="like"></span>
                                </div>
                            </div>
    `;
    this.parent.append(element);
  }
}

new MenuCard(
  './img/items/iphone-12-pro.jpeg',
  'iPhone 11 PRO Max',
  './img/icons/close.svg',
  0,
  2000,
  95,
  1327,
  '.cards'
).render();

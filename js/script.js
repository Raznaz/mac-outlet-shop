const products = [
  {
    img: './img/items/prod/1.jpg',
    title: 'iPhone 11 PRO Max',
    imgStock: './img/icons/close.svg',
    stock: 10,
    price: 19990,
    rate: 91,
    orders: 1100,
  },
  {
    img: './img/items/prod/2.jpg',
    title: 'iPhone 11 PRO Max',
    imgStock: './img/icons/close.svg',
    stock: 1,
    price: 15000,
    rate: 84,
    orders: 560,
  },
  {
    img: './img/items/prod/3.jpg',
    title: 'iPad PRO 13"',
    imgStock: './img/icons/close.svg',
    stock: 0,
    price: 1999,
    rate: 91,
    orders: 17100,
  },
  {
    img: './img/items/prod/4.jpg',
    title: 'iPhone 14 PRO Max',
    imgStock: './img/icons/close.svg',
    stock: 4,
    price: 24999,
    rate: 91,
    orders: 1100,
  },
  {
    img: './img/items/prod/5.jpg',
    title: 'MacBook Air',
    imgStock: './img/icons/close.svg',
    stock: 0,
    price: 21999,
    rate: 91,
    orders: 1100,
  },
  {
    img: './img/items/prod/6.jpg',
    title: 'iPhone XS',
    imgStock: './img/icons/close.svg',
    stock: 80,
    price: 31999,
    rate: 81,
    orders: 890,
  },
  {
    img: './img/items/prod/7.jpg',
    title: 'iPhone XS',
    imgStock: './img/icons/close.svg',
    stock: 0,
    price: 16999,
    rate: 91,
    orders: 1230,
  },
  {
    img: './img/items/macbook-pro16.png',
    title: 'MacBook PRO 16"',
    imgStock: './img/icons/close.svg',
    stock: 4,
    price: 1999,
    rate: 45,
    orders: 51100,
  },
];

class Card {
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
    this.checkStock();
    this.changeToUSD();
  }

  changeToUSD() {
    this.price = Math.ceil(this.price / this.transfer);
  }

  checkStock() {
    if (this.stock > 0) {
      this.srcStock = './img/icons/check.svg';
    }
  }

  render() {
    const element = document.createElement('div');
    element.classList.add('cards__item');
    element.innerHTML = `                                <div class="card">
                                    <div class="card__img">
                                        <img src=${this.src} alt='iphone'>
                                    </div>
                                    <div class="card__content">
                                        <h4 class="card__title">${this.title}</h4>
                                        <div class="card__stock">
                                        <img src=${this.srcStock} alt="close">
                                        <div>
                                        <span>${this.stock}</span> left
                                            in stock
                                        </div>    
                                        
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
                                    
                                </div>
                        
    `;
    this.parent.append(element);
  }
}

products.forEach(({ img, title, imgStock, stock, price, rate, orders }) => {
  new Card(img, title, imgStock, stock, price, rate, orders, '.cards').render();
});

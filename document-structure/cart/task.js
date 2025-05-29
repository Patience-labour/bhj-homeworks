const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

products.forEach(product => {
    const productId = product.dataset.id;
    const productImageSrc = product.querySelector('.product__image').src;

    const quantityValue = product.querySelector('.product__quantity-value');
    const quantityInc = product.querySelector('.product__quantity-control_inc');
    const quantityDec = product.querySelector('.product__quantity-control_dec');
    const addToCartButton = product.querySelector('.product__add');

    quantityInc.addEventListener('click', () => {
        let quantity = parseInt(quantityValue.textContent);
        quantity++;
        quantityValue.textContent = quantity;
    });

    quantityDec.addEventListener('click', () => {
        let quantity = parseInt(quantityValue.textContent);
        if (quantity > 1) {
            quantity--;
            quantityValue.textContent = quantity;
        }
    });

    addToCartButton.addEventListener('click', () => {
        const quantity = parseInt(quantityValue.textContent);
        const existingCartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);

        if (existingCartProduct) {
            const cartProductCount = existingCartProduct.querySelector('.cart__product-count');
            let currentCount = parseInt(cartProductCount.textContent);
            cartProductCount.textContent = currentCount + quantity;
        } else {
            cartProducts.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${productId}">
              <img class="cart__product-image" src="${productImageSrc}" alt="Product ${productId}">
              <div class="cart__product-count">${quantity}</div>
            </div>
          `);
        }
    });
});
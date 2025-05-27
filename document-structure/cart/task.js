const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

products.forEach(product => {
    const productId = product.dataset.id;
    const productImage = product.querySelector('.product__image').src;
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
        let cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);

        if (cartProduct) {
            const cartProductCount = cartProduct.querySelector('.cart__product-count');
            let currentCount = parseInt(cartProductCount.textContent);
            cartProductCount.textContent = currentCount + quantity;
        } else {
            cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.dataset.id = productId;

            const cartProductImage = document.createElement('img');
            cartProductImage.classList.add('cart__product-image');
            cartProductImage.src = productImage;

            const cartProductCount = document.createElement('div');
            cartProductCount.classList.add('cart__product-count');
            cartProductCount.textContent = quantity;

            cartProduct.append(cartProductImage, cartProductCount);
            cartProducts.append(cartProduct);
        }
    });
});
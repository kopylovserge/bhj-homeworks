const div = Array.from(document.querySelectorAll("div.product"));
const cart = document.querySelector("div.cart__products");

div.forEach((element) => {
    const quantity = element.querySelector("div.product__quantity-value");
    const plus = element.querySelector("div.product__quantity-control_inc");
    const minus = element.querySelector("div.product__quantity-control_dec");
    const batton = element.querySelector("div.product__add");
    const image = element.querySelector("img.product__image").getAttribute('src');
    const id = element.getAttribute('data-id');

    plus.addEventListener('click', () => {
        quantity.textContent = quantity.textContent*1 + 1;
    });

    minus.addEventListener('click', () => {
        if (quantity.textContent*1 > 1) {
            quantity.textContent = quantity.textContent*1 - 1;
        }
    });

    batton.addEventListener('click', () => {
        const cartAll = Array.from(document.querySelectorAll("div.cart__product"));
        let elemInCart = cartAll.find((el) => {
            if (el.getAttribute('data-id') === id) {
                return true;
            }
        })
        if (!elemInCart) {
            cart.insertAdjacentHTML('beforeend', '<div class="cart__product" data-id="'+ id +'"><img class="cart__product-image" src="'+ image +'"><div class="cart__product-count">'+ quantity.textContent +'</div></div>');
        } else {
            numStart = elemInCart.querySelector("div.cart__product-count").textContent;
            numFinal = numStart*1 + quantity.textContent*1;
            elemInCart.querySelector("div.cart__product-count").textContent = numFinal;
        }
     
    });

    
});
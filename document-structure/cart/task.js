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
        let kolVo = quantity.textContent;
        const cartAll = Array.from(document.querySelectorAll("div.cart__product"));
        let flag = false;

        if (cartAll.length > 0) {
            cartAll.forEach((el) => {
                if (el.getAttribute('data-id') === id) {
                    numStart = el.querySelector("div.cart__product-count").textContent;
                    numFinal = numStart*1 + quantity.textContent*1;
                    el.querySelector("div.cart__product-count").textContent = numFinal;
                    flag = true;
                }
            });
        }
        if (flag === false || cartAll.length === 0) {
            cart.insertAdjacentHTML('beforeend', '<div class="cart__product" data-id="'+ id +'"><img class="cart__product-image" src="'+ image +'"><div class="cart__product-count">'+ kolVo +'</div></div>');
        }
        
    });

    
});
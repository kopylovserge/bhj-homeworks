const preLoader = document.querySelector("img.loader.loader_active");
const valuta = document.getElementById('items');
const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        preLoader.classList.remove('loader_active')
        
        data = JSON.parse(xhr.responseText).response.Valute;
        Object.entries(data).forEach((e) => {
            valuta.insertAdjacentHTML('beforeend', '<div class="item"><div class="item__code">'+ e[0] +'</div><div class="item__value">'+ e[1].Value +'</div><div class="item__currency">руб.</div></div>');
        });
    }
})

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send()
const popUp = document.getElementById('subscribe-modal');
const closeDiv = popUp.querySelector("div.modal__close");


if (getCookie('clear') === '1') {
    popUp.classList.remove('modal_active');
}


function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    if (cookie) {
       return cookie.substring(name.length + 1); 
    }
    
}


closeDiv.addEventListener('click', () => {
    popUp.classList.remove('modal_active');
    document.cookie = "clear=1";
});
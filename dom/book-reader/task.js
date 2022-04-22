const text = document.querySelector("div.book__content");
const link = document.querySelectorAll("a.font-size");


function changeClass(el) {
    const linkActiv = document.querySelector("a.font-size_active");
    linkActiv.classList.toggle('font-size_active');
    el.classList.toggle('font-size_active');
}


link.forEach((element) => {
    const attr = element.getAttribute("data-size");
    if (attr === "small") {
        element.addEventListener('click', (e) => {
            if (text.classList.contains('book_fs-big')) {
                text.classList.remove('book_fs-big')
            }
            text.classList.add('book_fs-small');
            changeClass(element);
            e.preventDefault();
        }, false);
    } 
    if (attr === "big") {
        element.addEventListener('click', (e) => {
            if (text.classList.contains('book_fs-small')) {
                text.classList.remove('book_fs-small')
            }
            text.classList.add('book_fs-big');
            changeClass(element);
            e.preventDefault();
        }, false);
    } 
    if (attr === null || attr === "") {
        element.addEventListener('click', (e) => {
            if (text.classList.contains('book_fs-small')) {
                text.classList.remove('book_fs-small')
            }
            if (text.classList.contains('book_fs-big')) {
                text.classList.remove('book_fs-big')
            }
            changeClass(element);
            e.preventDefault();
        }, false);
    }
    
})





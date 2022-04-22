const div = Array.from(document.querySelectorAll("div.reveal"));

function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();

    if (bottom < 0) {
        el.classList.remove('reveal_active');
        return;
    }

    if (top > window.innerHeight) {
        el.classList.remove('reveal_active');
        return;
    }

    el.classList.add('reveal_active');
    return;
}

div.forEach((element) => {
    setInterval(() => {
        isVisible(element)
    }, 1000)
})

const advAll = document.querySelectorAll("div.card");

advAll.forEach((element) => {

const adv = Array.from(element.querySelectorAll("span.rotator__case"));
let i = 0;

function isVisible() {

    if (i < adv.length - 1) {
        adv[i].classList.remove('rotator__case_active');
        adv[i+1].classList.add('rotator__case_active');
        i += 1;
    } else {
        i = 0;
        adv[adv.length - 1].classList.remove('rotator__case_active');
        adv[i].classList.add('rotator__case_active');
    }

}

setInterval(() => {
        isVisible()
    }, 1000)

})

const elemUlSub = document.querySelectorAll("ul.menu.menu_main ul.menu.menu_sub");
const elemLi = document.querySelectorAll("ul.menu.menu_main li.menu__item");
const menu = Array.from(elemLi);

menu.forEach((element) => {
    if (element.closest(".menu_sub") === null) {
        element.querySelector("a").onclick = () => {
            if (element.querySelector("ul") && element.querySelector("ul").className === "menu menu_sub menu_active") {
                element.querySelector("ul").className = "menu menu_sub";
                return false;
            } else {
                elemUlSub.forEach((elementUl) => elementUl.className = "menu menu_sub");
                if (element.querySelector("ul")) {
                    element.querySelector("ul").className = "menu menu_sub menu_active";
                    return false;
                }
            }
        }
    }
})

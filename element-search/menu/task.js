const elemUlSub = document.querySelectorAll("ul.menu.menu_main ul.menu.menu_sub");
const elemLi = document.querySelectorAll("ul.menu.menu_main li.menu__item");
const menu = Array.from(elemLi);

menu.forEach((element) => {
    if (element.closest("ul.menu.menu_sub") === null) {
        element.querySelector("a").onclick = () => {
            const classElem = element.querySelector("ul").className;
            if (classElem === "menu menu_sub menu_active") {
                classElem = "menu menu_sub";
            } else {
                elemUlSub.forEach((elementUl) => elementUl.className = "menu menu_sub");
                element.querySelector("ul").className = "menu menu_sub menu_active";
            }
            return false;
        }
    }

})

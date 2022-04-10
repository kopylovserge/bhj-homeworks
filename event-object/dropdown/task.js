
const block = document.querySelectorAll("div.dropdown");
const blockArr = Array.from(block);

blockArr.forEach((element) => {
    function onClick() {
        if (element.querySelector("ul.dropdown__list").className === "dropdown__list dropdown__list_active") {
            element.querySelector("ul.dropdown__list").className = "dropdown__list";
        } else {
            element.querySelector("ul.dropdown__list").className = "dropdown__list dropdown__list_active";

        }
    }
    element.querySelector("div.dropdown__value").addEventListener("click", onClick);
    
    element.querySelectorAll("a.dropdown__link").forEach((elementMenu) => {
        elementMenu.onclick = () => {
            element.querySelector("div.dropdown__value").textContent = elementMenu.outerText;
            onClick();
            return false;
        }

    })

})


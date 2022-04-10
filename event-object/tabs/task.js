const elemTabsBig = Array.from(document.querySelectorAll("div.tabs"));

elemTabsBig.forEach((elementBig) => {

    const elemTabs = Array.from(elementBig.querySelectorAll("div.tab"));
    const elemCont = Array.from(elementBig.querySelectorAll("div.tab__content"));

    elemTabs.forEach((element) => {

        element.onclick = () => {
            let index = elemTabs.findIndex(el => el.className === "tab tab_active");
            elemTabs[index].className = "tab";
            elemCont[index].className = "tab__content";

            if (element.className === "tab") {
                element.className = "tab tab_active";
                elemCont[elemTabs.findIndex(el => el.className === "tab tab_active")].className = "tab__content tab__content_active";
            } else {
                return false;
            }

        }
    })

})
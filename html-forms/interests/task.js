const checkBoxList = document.querySelectorAll("ul.interests.interests_active");

checkBoxList.forEach((element) => {

    const liInter = element.closest("li.interest");
    const checkBoxMain = liInter.querySelector("input.interest__check");

    checkBoxMain.addEventListener('change', (e) => {
    const checkBoxElem = Array.from(element.querySelectorAll("input.interest__check"));
    checkBoxElem.forEach((el) => {el.checked === true ? el.checked = false : el.checked = true});
    });

});
const linkTooltip = Array.from(document.querySelectorAll("a.has-tooltip"));

linkTooltip.forEach((element) => {

    
    element.innerHTML+='<div class="tooltip">'+ element.getAttribute("title") +'</div>';

    element.addEventListener('click', (e) => {

        const divTooltip = document.querySelectorAll("div.tooltip")
        divTooltip.forEach((el) => {
            if (el.textContent === element.getAttribute("title")) {
                if (el.classList.contains('tooltip_active')) {
                    el.classList.remove('tooltip_active')
                } else {
                    const { bottom, left } = element.getBoundingClientRect();
                    el.setAttribute("style", "left: "+ left +"px; top: "+ bottom +"px");
                    el.classList.add('tooltip_active')
                }
            }
        })

        e.preventDefault();
    }, false);
})
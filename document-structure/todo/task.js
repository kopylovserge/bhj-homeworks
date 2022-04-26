const form = document.getElementById('tasks__form');
form.addEventListener('submit', function(e) {
// чтобы форма не отправлялась и страничка не перегружалась
    e.preventDefault();
}, false);


const div = document.getElementById('tasks__list');
const input = document.getElementById('task__input');

function addClose(e) {
    if ((e.code === "Enter" || e.code === "NumpadEnter") && input.value) {
        div.insertAdjacentHTML('beforeend', '<div class="task"><div class="task__title">'+ input.value +'</div><a href="#" class="task__remove">&times;</a></div>');

        const divClose = Array.from(document.querySelectorAll("div.task"));
        divClose.forEach((el) => {
            const divTitle = el.querySelector(".task__title");
            const close = el.querySelector(".task__remove");
            if (divTitle.textContent === input.value) {
                close.addEventListener('click', (e) => {
                    el.remove();
                    return false;
                })
            }
        });

        input.value = "";
    }
}

input.addEventListener('keydown', addClose);
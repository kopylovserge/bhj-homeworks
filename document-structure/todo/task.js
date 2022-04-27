const form = document.getElementById('tasks__form');
const div = document.getElementById('tasks__list');
const input = document.getElementById('task__input');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    addClose();
});

function addClose() {
    if (input.value.trim()) {
        div.insertAdjacentHTML('beforeend', '<div class="task"><div class="task__title">'+ input.value +'</div><a href="#" class="task__remove">&times;</a></div>');

        const divClose = Array.from(document.querySelectorAll("div.task"));
        const endEl = divClose[divClose.length - 1];
        const close = endEl.querySelector(".task__remove");
        close.addEventListener('click', () => {
            endEl.remove();
            return false;
        })

        input.value = "";
    }
}




// const form = document.getElementById('tasks__form');
// form.addEventListener('submit', function(e) {
// // чтобы форма не отправлялась и страничка не перегружалась
//     e.preventDefault();
// }, false);


// const div = document.getElementById('tasks__list');
// const input = document.getElementById('task__input');

// function addClose(e) {
//     if ((e.code === "Enter" || e.code === "NumpadEnter") && input.value.trim()) {
//         div.insertAdjacentHTML('beforeend', '<div class="task"><div class="task__title">'+ input.value +'</div><a href="#" class="task__remove">&times;</a></div>');

//         const divClose = Array.from(document.querySelectorAll("div.task"));
//         const endEl = divClose[divClose.length - 1];
//         const close = endEl.querySelector(".task__remove");
//         close.addEventListener('click', () => {
//             endEl.remove();
//             return false;
//         })

//         input.value = "";
//     }
// }

// input.addEventListener('keydown', addClose);
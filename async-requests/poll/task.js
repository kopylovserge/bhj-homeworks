const ansvers = document.getElementById('poll__answers');
const title = document.getElementById('poll__title');

const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const varTitle = JSON.parse(xhr.responseText).data.title;
        const varAnsvers = JSON.parse(xhr.responseText).data.answers;
        title.textContent = varTitle;
        varAnsvers.forEach((e) => {
            ansvers.insertAdjacentHTML('beforeend', '<button class="poll__answer">'+ e +'</button>');
            const but = Array.from(document.querySelectorAll("button.poll__answer"));
            but[but.length-1].addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            });
        });
    }
})

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send()






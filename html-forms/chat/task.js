// открыть чат
const chat = document.querySelector("div.chat-widget");
chat.addEventListener('click', (e) => {
    chat.classList.add('chat-widget_active');
});

// текущее время
let date = new Date();
let time = date.getHours() + ":" + date.getMinutes();

// чат
const input = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );

let otvet = ["Я занят", "Давай до свидания!", "Никого нет дома!"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

input.addEventListener('keydown', function(e) {
    if ((e.code === "Enter" || e.code === "NumpadEnter") && input.value) {
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${time}</div>
            <div class="message__text">${input.value}</div>
        </div>`;
        input.value = "";
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${time}</div>
            <div class="message__text">${otvet[getRandomInt(otvet.length)]}</div>
        </div>`;
    }
});





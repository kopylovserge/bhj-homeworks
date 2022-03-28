const timer = function() {
    const output = document.getElementById("timer");
    output.textContent -= 1;
    if (output.textContent == -1) {
        alert("Вы победили в конкурсе!");
        clearInterval(timeGo);
        output.textContent = 0;
    }
}

let timeGo = setInterval(timer,1000);
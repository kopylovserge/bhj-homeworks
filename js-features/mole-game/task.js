
elementHole = [];
const deadHole = document.getElementById("dead");
const lostHole = document.getElementById("lost");

for (let i = 1; i < 10; i++) {
    elementHole[i] = document.getElementById(`hole${i}`);
    elementHole[i].onclick = function checkHole() {
        if (elementHole[i].className.includes('hole_has-mole')) {
            deadHole.textContent = deadHole.textContent * 1 + 1;
            if (deadHole.textContent == 10) {
                setTimeout(alert("Вы победили!"), 1);
                deadHole.textContent = 0;
            }
        } else {
            lostHole.textContent = lostHole.textContent * 1 + 1;
            if (lostHole.textContent == 5) {
                setTimeout(alert("Вы проиграли!"), 10000);
                lostHole.textContent = 0;
            }
        }
    }
}


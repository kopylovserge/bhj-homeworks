
elementHole = [];
const deadHole = document.getElementById("dead");
const lostHole = document.getElementById("lost");

for (let i = 1; i < 10; i++) {
    elementHole[i] = document.getElementById(`hole${i}`);
    elementHole[i].onclick = function checkHole() {
        if (elementHole[i].className.includes('hole_has-mole')) {
            deadHole.textContent = deadHole.textContent * 1 + 1;
            if (deadHole.textContent == 10) {
                alert("Вы победили!");
            }
        } else {
            lostHole.textContent = lostHole.textContent * 1 + 1;
            if (lostHole.textContent == 5) {
                alert("Вы проиграли!");
            }
        }
    }
}


const image = document.getElementById("cookie");
const text = document.getElementById("clicker__counter");

function changeSizes() {
    if (image.width < 200) {
        image.width = 200;
        text.textContent = text.textContent * 1 + 1;
    } else {
        image.width = 180;
        text.textContent = text.textContent * 1 + 1;
    }
    
}

image.onclick = changeSizes;
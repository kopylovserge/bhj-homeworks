
const popupSuccess = document.getElementById("modal_success");
const popupMain = document.getElementById("modal_main");
const close = document.querySelectorAll("div.modal__close");
const good = document.querySelector("a.show-success");

function closeWin() {
    popupSuccess.className = "modal";
    popupMain.className = "modal";
}

popupMain.className = "modal modal_active";

close[1].onclick = close[0].onclick = closeWin;
good.onclick = () => popupSuccess.className = "modal modal_active";
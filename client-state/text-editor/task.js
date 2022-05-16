const formText = document.getElementById('editor');
const clearText = document.getElementById('clear');

formText.value = localStorage.text;

formText.addEventListener('keydown', () => {
    localStorage.text = formText.value;
});

clearText.addEventListener('click', () => {
    localStorage.text = "";
    formText.value = "";
});



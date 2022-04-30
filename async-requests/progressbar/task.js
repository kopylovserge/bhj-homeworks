const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    const formFile = new FormData(form);


    xhr.upload.onprogress = (e) => {
        const progress = document.getElementById( 'progress' );
        progress.value = (e.loaded / e.total).toFixed(1);
    }
    

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formFile);

});

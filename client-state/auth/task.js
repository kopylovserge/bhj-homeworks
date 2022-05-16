const formAuth = document.getElementById('signin');
const formWelcome = document.getElementById('welcome');
const formWelcomeId = document.getElementById('user_id');


if (localStorage.user_id) {
    formWelcome.classList.add('welcome_active');
    formWelcomeId.textContent = localStorage.user_id;
} else {
    formWelcome.classList.remove('welcome_active');
}

signin__form.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('https://netology-slow-rest.herokuapp.com/auth.php', {
      method: 'POST',
      body: new FormData(signin__form)
    });

    let result = await response.json();

    if (result.success === true) {
        localStorage.user_id = result.user_id;
        formWelcome.classList.add('welcome_active');
        formWelcomeId.textContent = result.user_id;
    } else {
        formWelcome.classList.remove('welcome_active');
        alert("Неверный логин/пароль");
        if (localStorage.user_id) {
            localStorage.removeItem('user_id');
        }
    }

  };

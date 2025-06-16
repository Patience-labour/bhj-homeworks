const signinForm = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');
const signinBlock = document.getElementById('signin');
const welcomeBlock = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');

signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signinForm);

    const response = await fetch(signinForm.action, {
        method: 'POST',
        body: formData
    });

    const data = await response.json();

    if (data.success) {
        localStorage.setItem('user_id', data.user_id);
        userIdSpan.textContent = data.user_id;

        signinBlock.classList.remove('signin_active');
        welcomeBlock.classList.add('welcome_active');
    } else {
        alert('Неверный логин или пароль');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const userId = localStorage.getItem('user_id');
    if (userId) {
        userIdSpan.textContent = userId;
        signinBlock.classList.remove('signin_active');
        welcomeBlock.classList.add('welcome_active');
    }
});
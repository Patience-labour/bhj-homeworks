const modal = document.getElementById('subscribe-modal');
const closeModalButton = document.querySelector('.modal__close');

function showModal() {
    modal.classList.add('modal_active');
}

function closeModal() {
    modal.classList.remove('modal_active');
    setCookie('modalShown', 'true', 365);
}

function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split(';');

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return undefined;
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}


closeModalButton.addEventListener('click', closeModal);
const modal = document.getElementById('subscribe-modal');
const closeModalButton = document.querySelector('.modal__close');

function showModal() {
    modal.classList.add('modal_active');
}

function closeModal() {
    modal.classList.remove('modal_active');
}

if (localStorage.getItem('modalShow')) {
    setTimeout(showModal, 2000);
    localStorage.setItem('modalShow', 'true');
}

closeModalButton.addEventListener('click', closeModal);
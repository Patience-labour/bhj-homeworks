const textarea = document.querySelector('textarea');

textarea.addEventListener('input', (e) => {
    localStorage.setItem('text', e.target.value)
})

textarea.value = localStorage.getItem('text');
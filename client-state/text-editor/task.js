const textarea = document.querySelector('textarea');

textarea.addEventListener('input', (e) => {
    localStorage.setItem('text', e.target.value)
})
if(localStorage.text) {
    textarea.value = localStorage.text
}
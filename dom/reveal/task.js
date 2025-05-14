function isRect(el) {
    const { top, bottom } = el.getBoundingClientRect();
    return top <= window.innerHeight && bottom >= 0;
}

document.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((rev) => {
        if (isRect(rev)) {
            rev.classList.add('reveal_active');
        } else {
            rev.classList.remove('reveal_active');
        }
    });
});
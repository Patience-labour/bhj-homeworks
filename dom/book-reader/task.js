document.addEventListener('click', (event) => {
  if (event.target.classList.contains('font-size')) {
    event.preventDefault();

    const book = document.getElementById('book');

    document.querySelectorAll('.font-size').forEach(fontSize => {
      fontSize.classList.remove('font-size_active');
    });

    event.target.classList.add('font-size_active');

    const fontSize = event.target.dataset.size;

    book.classList.remove('book_fs-small', 'book_fs-big');

    if (fontSize === 'small') {
      book.classList.add('book_fs-small');
    } else if (fontSize === 'big') {
      book.classList.add('book_fs-big');
    }
  }
});
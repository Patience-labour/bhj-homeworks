 const input = document.querySelector('input');
    const btn = document.querySelector('.tasks__add');
    const tasksList = document.querySelector('.tasks__list');

    btn.addEventListener('click', e => {
      e.preventDefault();
      const title = input.value.trim();
      if (title) {
        tasksList.insertAdjacentHTML('afterbegin', `
          <div class="task">
            <div class="task__title">
              ${title}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>
        `);

        input.value = '';

        tasksList.addEventListener('click', function(event) {
            if (event.target.classList.contains('task__remove')) {
                event.preventDefault();
                event.target.closest('.task').remove();
            }
        });
      }
    });
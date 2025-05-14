const rotator = document.querySelector('.rotator');
const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
let activeIndex = 0;

function rotate() {
  cases[activeIndex].classList.remove('rotator__case_active');
  cases[activeIndex].style.color = '';

  activeIndex = (activeIndex + 1) % cases.length;

  const activeCase = cases[activeIndex];
  activeCase.classList.add('rotator__case_active');
  activeCase.style.color = activeCase.dataset.color || '';
}

setInterval(rotate, 1000);
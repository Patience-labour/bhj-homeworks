const tooltips = document.querySelectorAll('.has-tooltip');

tooltips.forEach(tooltip => {
    tooltip.addEventListener('click', e => {
        e.preventDefault();

        let tooltipDiv = document.querySelector('.tooltip');

        tooltipDiv = document.createElement('div');
        tooltipDiv.classList.add('tooltip');
        tooltipDiv.textContent = tooltip.getAttribute('title');

        tooltip.append(tooltipDiv);

        const elementRect = tooltip.getBoundingClientRect();
        
        tooltipDiv.style.left = elementRect.left + 'px';

        tooltipDiv.classList.toggle('tooltip_active');
    })
})
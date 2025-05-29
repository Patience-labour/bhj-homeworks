const tooltips = document.querySelectorAll('.has-tooltip');

tooltips.forEach(tooltip => {
  tooltip.addEventListener('click', e => {
    e.preventDefault();

    document.querySelectorAll('.tooltip_active').forEach(activeTooltip => {
      activeTooltip.classList.remove('tooltip_active');
    });

    let tooltipDiv = tooltip.nextElementSibling;
    if (!tooltipDiv || !tooltipDiv.classList.contains('tooltip')) {
      tooltipDiv = document.createElement('div');
      tooltipDiv.className = 'tooltip';
      tooltip.after(tooltipDiv);
    }

    const tooltipText = tooltip.getAttribute('title');
    const isDoubleClick = (tooltipDiv.classList.contains('tooltip_active') && tooltipDiv.textContent === tooltipText);

    if (isDoubleClick) {
      tooltipDiv.classList.toggle('tooltip_active');
      return;
    }

    tooltipDiv.textContent = tooltipText;
    const elementRect = tooltip.getBoundingClientRect();
    tooltipDiv.style.left = elementRect.left + 'px';
    tooltipDiv.style.top = elementRect.bottom + 'px';
    tooltipDiv.classList.add('tooltip_active');
  });
});
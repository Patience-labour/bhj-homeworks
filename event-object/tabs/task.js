const tabsElements = document.querySelectorAll('.tab');

function changeTabs(e) {
    const clickedTab = e.target;
    const tabsContainer = clickedTab.closest('.tabs');

    const contents = tabsContainer.querySelectorAll('.tab__content');
    const index = Array.from(tabsElements).indexOf(clickedTab);

    tabsElements.forEach(tab => tab.classList.remove('tab_active'));
    contents.forEach(content => content.classList.remove('tab__content_active'));

    clickedTab.classList.add('tab_active');
    contents[index].classList.add('tab__content_active');
}

tabsElements.forEach(tab => {
    tab.addEventListener('click', changeTabs)
});
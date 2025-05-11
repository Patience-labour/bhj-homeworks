function openMenu() {
    document.querySelector('.dropdown__list').classList.add('dropdown__list_active')
}
function closeMenu() {
    document.querySelector('.dropdown__list').classList.remove('dropdown__list_active')
}
const value = document.querySelector('.dropdown__value')
value.addEventListener('click', openMenu)
var transmitter = Array.from(document.querySelectorAll('.dropdown__item'))
transmitter.forEach((item, index) => {
    item.onclick = () => {
        closeMenu()
        value.textContent = transmitter[index].textContent
        return false
    }
})
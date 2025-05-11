const click = document.getElementById('clicker__counter');
let value = 0;
const isPush = true;
const clickBtn = document.getElementById('cookie');

function clicker() {
    value++;
    click.innerHTML = value;

    clickBtn.style.width =  (value % 2 !== 0) ? '250px' : '200px';
    clickBtn.style.height = (value % 2 !== 0) ? '160px' : '128px';
    
}


clickBtn.onclick = clicker;
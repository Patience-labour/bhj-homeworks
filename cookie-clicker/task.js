let click = document.getElementById('clicker__counter');
let value = 0;
let isPush = true;
let clickBtn = document.getElementById('cookie');

function clicker() {
    value++;
    click.innerHTML = value;

    if(isPush) {
        clickBtn.style.width = '250px';
        clickBtn.style.height = '160px';
    } else {
        clickBtn.style.width = '200px';
        clickBtn.style.height = '128px';
    }

    isPush = !isPush;
    
}


clickBtn.onclick = clicker;
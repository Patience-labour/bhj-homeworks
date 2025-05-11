let time = 59;
const countDownElement = document.getElementById('timer');

function updateTime() {
    time--;
    countDownElement.textContent = time;

    if(time == 0) {
        clearInterval(timeInterval);
        alert('Вы победили в конкурсе!')
    }
}

const timeInterval = setInterval(updateTime, 1000);
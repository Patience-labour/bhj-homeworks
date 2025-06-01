const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

async function getPollData() {
    const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
    const data = await response.json();
    return data;
}

async function displayPoll() {
    const pollData = await getPollData();

    if (pollData && pollData.data) {
        pollTitle.textContent = pollData.data.title;

        pollAnswers.innerHTML = '';

        pollData.data.answers.forEach(answer => {
            const button = document.createElement('button');
            button.classList.add('poll__answer');
            button.textContent = answer;
            button.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            });
            pollAnswers.append(button);
        });
    }
}

displayPoll();

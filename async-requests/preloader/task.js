const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

async function getCurrencyRates() {
    const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
    const data = await response.json();
    return data;
}

async function displayCurrencyRates() {
    loader.classList.add('loader_active');
    itemsContainer.innerHTML = '';

    const currencyData = await getCurrencyRates();

    loader.classList.remove('loader_active');

    if (currencyData && currencyData.response && currencyData.response.Valute) {
        const valuteData = currencyData.response.Valute;

        for (const currencyCode in valuteData) {
            if (valuteData.hasOwnProperty(currencyCode)) {
                const currency = valuteData[currencyCode];

                const item = document.createElement('div');
                item.classList.add('item');

                const code = document.createElement('div');
                code.classList.add('item__code');
                code.textContent = currency.CharCode;

                const value = document.createElement('div');
                value.classList.add('item__value');
                value.textContent = currency.Value;

                const currencyUnit = document.createElement('div');
                currencyUnit.classList.add('item__currency');
                currencyUnit.textContent = 'руб.';

                item.append(code);
                item.append(value);
                item.append(currencyUnit);

                itemsContainer.append(item);
            }
        }
    }
}

displayCurrencyRates();
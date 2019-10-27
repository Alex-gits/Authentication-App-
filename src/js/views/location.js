import UI from '../config/ui.config';

// Функции для заполнения селектов опшинами

export function getCountrySelect(countries) {
    const countrySelect = UI.regSelectCountry;

    Object.keys(countries).forEach(el => {
        const option = `
        <option value="${el}"">
    `;

        countrySelect.insertAdjacentHTML('beforeend', option);
    })
}

export function getCitySelect(cities) {
    const countrySelect = UI.citySelect;
    countrySelect.innerHTML = '';

    if (!UI.countryInput.value) return;

    Object.values(cities).forEach(el => {
        const option = `
        <option value="${el}"">
    `;

        countrySelect.insertAdjacentHTML('beforeend', option);
    })
}
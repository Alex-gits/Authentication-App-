import UI from '../config/ui.config';

const { regInputCity, countryInput } = UI;

// Функция на включение/отключения инпута с городами в зависимости от того, введено ли что-то в инпут со странами

export function countryInputCheck() {
    if (!countryInput.value) {
        regInputCity.value = '';
        regInputCity.disabled = true;
    } else {
        regInputCity.disabled = false;
    }
}
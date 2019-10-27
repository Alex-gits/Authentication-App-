// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap';
import '../css/style.css';
import UI from './config/ui.config';
import { login, register } from './services/auth.service';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { getFormValue } from './views/registration';
import { dateMaker, wrongPasswordsAlert, removePassAlert } from './views/registration';
import { comparePasswords } from './helpers/compare';
import { getCountries } from './store/location.store';
import { cities } from './services/location.service';
import { getCitySelect } from './views/location';
import { store } from './store/location.store';
import { countryInputCheck } from './helpers/countryCheck';

const { logForm, regForm, inputEmail, inputPassword, regTab, detailsWrapper, regInputFirstPassword, regInputSecondPassword, countryInput } = UI;
const loginInputs = [inputEmail, inputPassword];
const regPasswordInputs = [regInputFirstPassword, regInputSecondPassword];
const regInputs = Array.from(regTab.querySelectorAll('.form-control'));

document.addEventListener('DOMContentLoaded', () => {
    // Вызываем функции на получение стран и заполнения селектов с датой
    getCountries();
    dateMaker.day();
    dateMaker.month();
    dateMaker.year();
})

logForm.addEventListener('submit', (e) => {
    e.preventDefault();
    onSubmit();
});

regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    regMe();
});

// Вызываем функцию на получение списка городов, куда мы передаем индекс от выбранной страны

countryInput.addEventListener('change', () => {
    const selectedCountry = store.countries[countryInput.value];

    getCities(selectedCountry);
});

loginInputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));
regInputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));
regPasswordInputs.forEach(el => el.addEventListener('focus', () => removePassAlert()));

async function onSubmit() {
    const isValidForm = loginInputs.every(el => {
        const isValidInput = validate(el);
        if (!isValidInput) {
            showInputError(el);
        }
        return isValidInput;
    });

    if (!isValidForm) return;

    await login(inputEmail.value, inputPassword.value);
    logForm.reset();
}

// Функция для отправки POST-запроса на регистрицию, плюс тут вызывается функция на проверку того, что у нас совпадают value полей для ввода паролей. Если они не совпадают, то появляется соответствующее уведомление

async function regMe() {
    const isValidForm = regInputs.every(el => {
        const isValidInput = validate(el);
        if (!isValidInput) {
            showInputError(el);
        }
        return isValidInput;
    });

    if (!isValidForm) return;

    if (comparePasswords() === 0) {
        await register(getFormValue());
        regForm.reset();
    } else {
        detailsWrapper.insertAdjacentHTML('beforeend', wrongPasswordsAlert())
        return;
    }
}

// Функция для отправки ГЕТ-запроса на получение городов. Так же тут вызывается функция для проверки того, что у нас поле со странами не пустое. В противном случае делает поле с городами неактивным

async function getCities(index) {
    countryInputCheck();

    if (!countryInput.value) return;

    const citiesArray = await cities(index);
    getCitySelect(citiesArray);
}
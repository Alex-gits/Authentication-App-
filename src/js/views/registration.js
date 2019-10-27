import UI from '../config/ui.config';

const { regInputName, regInputLastName, regInputNickname, regInputDay, regInputMonth, regInputYear, regInputEmail, regInputPhone, regInputCity,
    countryInput, regSelectGender, regInputFirstPassword, detailsWrapper } = UI;

// Фукнция для создания объекта, который мы посылаем с ПОСТ запросом при регистрации

export function getFormValue() {
    const obj = {
        email: regInputEmail.value,
        password: regInputFirstPassword.value,
        nickname: regInputNickname.value,
        first_name: regInputName.value,
        last_name: regInputLastName.value,
        phone: regInputPhone.value,
        gender_orientation: regSelectGender.value,
        city: regInputCity.value,
        country: countryInput.value,
        date_of_birth_day: regInputDay.value,
        date_of_birth_month: regInputMonth.value,
        date_of_birth_year: regInputYear.value,
    }

    return obj;
}

// Функции для создания опшинов с датами

export const dateMaker = {
    day() {
        for (let i = 1; i <= 31; i++) {
            const option = `
                <option value="${i}">${i}</option>
            `
            regInputDay.insertAdjacentHTML('beforeend', option);
        }
    },
    month() {
        for (let i = 1; i <= 12; i++) {
            const option = `
            <option value="${i}">${i}</option>
        `
            regInputMonth.insertAdjacentHTML('beforeend', option);
        }
    },
    year() {
        for (let i = 1920; i <= 2019; i++) {
            const option = `
            <option value="${i}">${i}</option>
        `
            regInputYear.insertAdjacentHTML('beforeend', option);
        }
    }
}

// Функции для вывода/удаления сообщения о том, что нам ввели разные пароли

export function wrongPasswordsAlert() {
    removePassAlert();

    return `
        <div class="alert alert-danger" role="alert">
            Passwords Don't Match!
        </div>
    `;
}

export function removePassAlert() {
    const passAlert = detailsWrapper.querySelector('.alert-danger');
    if (passAlert) {
        detailsWrapper.removeChild(passAlert);
    }
}
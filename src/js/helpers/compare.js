import UI from '../config/ui.config';

const { regInputFirstPassword, regInputSecondPassword } = UI;

// Модуль для проверки того, что нам ввели одинаковые пароли

export function comparePasswords() {
    const firstPassword = regInputFirstPassword.value;
    const secondPassword = regInputSecondPassword.value;
    const result = firstPassword.localeCompare(secondPassword);

    return result;
}
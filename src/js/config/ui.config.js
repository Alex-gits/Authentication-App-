const UI = {
    logForm: document.forms['loginForm'],
    regForm: document.forms['registrationForm'],
    inputEmail: document.getElementById('email'),
    inputPassword: document.getElementById('password'),
    loginBtn: document.querySelector('.login-btn'),
    regBtn: document.querySelector('.reg-btn'),
    regTab: document.getElementById('registration-tab'),
    regInputName: document.getElementById('first_name'),
    regInputLastName: document.getElementById('last_name'),
    regInputNickname: document.getElementById('nickname'),
    regInputDay: document.querySelector('.day-of-birth'),
    regInputMonth: document.querySelector('.month-of-birth'),
    regInputYear: document.querySelector('.year-of-birth'),
    regInputEmail: document.getElementById('reg-email'),
    regInputPhone: document.getElementById('phone'),
    regInputCity: document.getElementById('cities-input'),
    regSelectCountry: document.getElementById('country-select'),
    regInputFirstPassword: document.getElementById('reg-password'),
    regInputSecondPassword: document.getElementById('reg-password2'),
    regSelectGender: document.querySelector('.gender'),
    detailsWrapper: document.querySelector('.details'),
    countryInput: document.getElementById('countries-input'),
    citySelect: document.getElementById('cities-select')
};

export default UI;
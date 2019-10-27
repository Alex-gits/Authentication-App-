import { countries } from '../services/location.service';
import { getCountrySelect } from '../views/location';

// Модуль для хранения стран

export const store = {
    countries: {},
}

export async function getCountries() {
    const countriesObj = await countries();
    store.countries = Object.keys(countriesObj).reduce((acc, key) => {
        acc[countriesObj[key]] = key; return acc;
    }, {});

    getCountrySelect(store.countries);
}
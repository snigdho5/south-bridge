import { post } from "../utils/fetch";

export const countryList = async () =>
    post('country-list');

export const stateList = async (data) =>
    post('state-list', data, true);

export const cityList = async (data) =>
    post('city-list', data, true);

export const userCategoryList = async (data) =>
    post('user-category-list');
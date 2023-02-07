export const MAX_SELECTED_MOVIES = 20;
export const CONFIRM_MODULE_TIMEOUT = 1500;
export const ICON_MODULE_TIMEOUT = 3000;
export const LOCALES = {
    ENGLISH: 'en-us',
    UKRAINIAN: 'uk',
    GERMAN: 'de-de',
    FRENCH: 'fr-ca'
}
export const SORT_OPTIONS = [
    { label: 'popularity', value: 'popularity'},
    { label: 'release_date', value: 'release_date'},
    { label: 'revenue', value: 'revenue'},
    { label: 'primary_release_date', value: 'primary_release_date'},
    { label: 'original_title', value: 'original_title'},
    { label: 'vote_average', value: 'vote_average'},
    { label: 'vote_count', value: 'vote_count'},
];

export const SORT_DIRECTION = {
    DESC: 'desc',
    ASC: 'asc'
}
export const STORAGE_KEY = 'locale';
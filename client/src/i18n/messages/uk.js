import { LOCALES } from "../../const";

export default {
    [LOCALES.UKRAINIAN]: {
        navigation: {
            title: 'Рекомендовані<span>Фільми</span>',
            settings: 'Налаштування'
        },
        selected : {
            recommend: 'Тут будуть фільми, які ви порадите друзям',
            form: {
                placeholder: 'Введіть назву списку',
                error: 'Введіть назву списку',
            },
            modal: {
                share: 'Поділіться с друзями',
                copy: 'Зкопійовано!'
            }
        },
        filters: {
            genre: 'Жанри',
            button: 'Сортувати'
        }
    }
}
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
            button: 'Сортувати',
            year: 'Рік',
            sort_by: 'Сортувати по',
            sort: {
                popularity: 'Популярності',
                release_date: 'Даті випуску',
                revenue: 'Дохід',
                original_title: 'Оригінальна назва',
                vote_average: 'Середньому голосуванню',
                vote_count: 'Підрахунку голосів'
            },
        }
    }
}
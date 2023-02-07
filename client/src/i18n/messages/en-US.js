import { LOCALES } from "../../const";

export default {
    [LOCALES.ENGLISH]: {
        navigation: {
            title: 'Movies<span>Recommendation</span>',
            settings: 'Settings'
        },
        selected: {
            recommend: 'Here are your favorite movies',
            form: {
                placeholder: 'Put the list name',
                error: 'Enter list name',
            },
            modal: {
                share: 'Share with friends',
                copy: 'Copied!'
            }
        },
        filters: {
            genre: 'Genres',
            button: 'Sort',
            year: 'Year',
            sort_by: 'Sort by',
            sort: {
                popularity: 'Popularity',
                release_date: 'Release Date',
                revenue: 'Revenue',
                original_title: 'Original title',
                vote_average: 'Vote Average',
                vote_count: 'Vote_count'
            },
        }
    }
}
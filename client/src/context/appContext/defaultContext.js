import { LOCALES, STORAGE_KEY } from "../../const";
import { getFromStorage } from "../../utils/localStorage";
import { useSearchParams } from "react-router-dom";

export default {
    locale: getFromStorage(STORAGE_KEY) || LOCALES.ENGLISH,
};
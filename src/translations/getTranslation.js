import english from './english.json';
import german from './german.json';
import french from './french.json';

import config from '../config/config.json';
export default function getTranslation(localStorage) {
    const getLanguage = () => {
        const defaultLang = config.prefs_default_lang; 

        if(typeof localStorage !== undefined){
            const lang = localStorage.getItem('prefs_lang');
            return lang ? lang : defaultLang;
        }

        return defaultLang;
    }

    switch(getLanguage()){
        case 'en': return english;
        case 'de': return german;
        case 'fr': return french;
        default: return config.prefs_default_lang;
    }
}
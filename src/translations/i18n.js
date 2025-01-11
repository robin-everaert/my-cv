import { createI18n } from 'vue-i18n';

// Import des fichiers de traduction
import layout from '../translations/layout.json';
import home from '../translations/home.json';

// Regrouper les traductions
const messages = {
  en: {
    ...layout.en,
    ...home.en,
  },
  fr: {
    ...layout.fr,
    ...home.fr,
  },
};

// Créer une instance de Vue I18n
const i18n = createI18n({
  locale: 'en', // Langue par défaut
  fallbackLocale: 'en', // Langue de secours
  messages,
});



export default i18n;

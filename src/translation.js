import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import i18nextApi from "i18next-http-backend";
// "Inline" English and Arabic translations.
// We can localize to any language and any number of languages.
const resources = {
  en: {
    translation: {
      Home: "Home",
      About: "About",
      Services: "Services",
      Contact: "Contact",
    },
  },
  ar: {
    translation: {
      Home: "بيت",
      About: "عن",
      Services:"خدماتنا",
      Contact: "اتصل بنا",
    },
  },
};
i18next
  .use(initReactI18next)
  .use(i18nextApi)
  .init({
    // resources, 
    lng: "ar",
    interpolation: {
      escapeValue: false,
    },
  });
export default i18next;
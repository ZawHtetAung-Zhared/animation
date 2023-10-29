//https://www.i18next.com/
//https://react.i18next.com/getting-started
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { _useCookie } from "./custom_hooks/_useCookie"; //backend usage

const resources = {};

i18n.use(initReactI18next).init({
  resources,
  debug: import.meta.env.VITE_DEBUG,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

const Index = () => {
  const { setCookie } = _useCookie();
  i18n.on("languageChanged", () => {
    setCookie("default_language", i18n.language);
  });
  return <></>;
};

export default Index;

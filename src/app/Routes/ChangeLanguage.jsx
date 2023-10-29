import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const intendedLang = pathname.split("/")[1];

  useEffect(() => {
    if (intendedLang != i18n.language) {
      i18n.changeLanguage(intendedLang);
    }
  }, [intendedLang]);
};

export default Index;

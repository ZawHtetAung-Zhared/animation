import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import initTranslations from "./translations";
import "./index.scss";

const Index = () => {
  const { t, i18n, i18nReady } = initTranslations("Header");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const changeLanguage = (lang) => {
    if (lang != i18n.language) {
      let currentRoute = pathname.split("/");
      if (currentRoute[1] !== undefined) {
        currentRoute[1] = lang;
        navigate(`${currentRoute.join("/")}`);
      }
    }
  };

  return (
    i18nReady && (
      <header>
        <div className="container">
          <ul>
            <li>
              <Link to="one">{t("sample1")}</Link>
            </li>
            <li>
              <Link to="two">{t("sample2")}</Link>
            </li>
          </ul>
          <div>
            <span onClick={() => changeLanguage("en")}>EN</span>/
            <span onClick={() => changeLanguage("pl")}>PL</span>
          </div>
        </div>
      </header>
    )
  );
};

export default Index;

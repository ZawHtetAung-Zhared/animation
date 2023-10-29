import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Index = (namespace) => {
  const { i18n } = useTranslation(namespace);
  const [componenti18nReady, setComponentI18nReady] = useState(false);
  const [componentTranslations, setComponentTranslations] = useState(null);

  useEffect(() => {
    if (i18n.language !== undefined) {
      __construct();
    }
  }, [i18n.language]);

  const __construct = async () => {
    setComponentI18nReady(false);
    let componentTranslationsData;
    try {
      componentTranslationsData = await loadTranslations(i18n.language);
    } catch (error) {
      componentTranslationsData = await loadTranslations("en");
    }

    setComponentTranslations(componentTranslationsData.default);
    setComponentI18nReady(true);
  };

  //dynamic imports ${} in vite must start with ./ or ../
  //https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
  const loadTranslations = async (lang) => {
    try {
      return await import(`./${lang}/index.jsx`);
    } catch (error) {
      console.error(
        `Failed to load ${lang} - ${namespace} componentTranslations:: ${error}`
      );
      throw error;
    }
  };

  return { componentTranslations, componenti18nReady };
};

export default Index;

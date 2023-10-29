import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

const Index = (folder, filename, extension) => {
  const { t, i18n } = useTranslation(folder);
  const [i18nReady, setI18nReady] = useState(false);

  useEffect(() => {
    if (i18n.language !== undefined) {
      __construct();
    }
  }, [i18n.language]);

  const __construct = async () => {
    setI18nReady(false);
    let translationsData;
    try {
      translationsData = await loadTranslations(
        folder,
        filename,
        extension,
        i18n.language
      );
    } catch (error) {
      translationsData = await loadTranslations(
        folder,
        filename,
        extension,
        "en"
      );
    }

    i18n.addResourceBundle(i18n.language, folder, translationsData);
    setI18nReady(true);
  };

  //dynamic imports ${} in vite must start with ./ or ../
  //https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
  const loadTranslations = async (folder, filename, extension, lang) => {
    try {
      return await import(`${folder}/${lang}/${filename}.${extension}`);
    } catch (error) {
      console.error(
        `Failed to load ${lang} - ${folder} translations: ${error}`
      );
      throw error;
    }
  };

  return { Trans, t, i18n, i18nReady };
};

export default Index;

import initComponentTranslations from "./componentTranslations";
import "./index.scss";

const Index = () => {
  const { componentTranslations, componenti18nReady } =
    initComponentTranslations("Sample2");
  return componenti18nReady && <>{componentTranslations}</>;
};

export default Index;

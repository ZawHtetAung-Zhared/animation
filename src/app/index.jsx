import GlobalStates from "globalStates";
import Translations from "translations";
import Routes from "./Routes";
import Services from "./Services";
import "./index.scss";

const Index = () => {
  if (import.meta.env.VITE_DEBUG === "false") {
    console.log = () => {};
    console.error = () => {};
    console.debug = () => {};
  }
  return (
    <GlobalStates>
      <Translations />
      <Services />
      <Routes />
    </GlobalStates>
  );
};

export default Index;

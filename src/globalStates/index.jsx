import { createContext, useContext } from "react";
import useFactory from "./_factory";

const Context = createContext();
export const useGlobalStates = () => useContext(Context);

const Index = ({ children }) => {
	const globalStates = {
		sample: useFactory(),
	};

	return (
		<Context.Provider value={{ ...globalStates }}>{children}</Context.Provider>
	);
};

export default Index;

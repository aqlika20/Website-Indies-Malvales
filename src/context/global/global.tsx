import { createContext, PropsWithChildren, useContext } from 'react';

interface GlobalContextType {
  settingOpened: boolean;
  openSetting: () => void;
  closeSetting: () => void;
}

const GlobalContext = createContext<any>({});

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children, staticData }: PropsWithChildren<any>) => {
  return <GlobalContext.Provider value={{ ...(staticData || {}) }}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;

import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useState,
} from "react";

import { TabKey } from "../../utils/Types";

interface MyContextType {
  tabState?: TabKey;
  setTabState?: (value: TabKey) => void;
}

const initialState: MyContextType = {
  tabState: "Merry Set",
  setTabState: () => {},
};

const ContextApi = createContext<MyContextType | null>(null);

interface AppProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state] = useReducer((state) => state, initialState);

  const [tabState, setTabState] = useState<TabKey>("Merry Set");

  const contextValue: MyContextType = {
    ...state,
    tabState,
    setTabState,
  };

  return (
    <ContextApi.Provider value={contextValue}>{children}</ContextApi.Provider>
  );
};

const useAppContext = (): MyContextType => {
  const context = useContext(ContextApi);
  if (!context) {
    throw new Error("useAppContext must be used within a ContextProvider");
  }
  return context;
};

export { ContextProvider, useAppContext };

import { createContext, useContext } from 'react';

export const StaticContext = createContext<any>({});

export const useStaticData = () => useContext(StaticContext);

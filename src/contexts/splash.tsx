import React, { useState } from "react";

// Helpers
import { getCache } from "../utils/storage";

export interface SplashContextInterface {
  isSplashShown: boolean;
  setIsSplashShown: Function;
}

const SplashContext = React.createContext<SplashContextInterface | null>(null);

export const SplashProvider = ({ children }: any) => {
  const [isSplashShown, setIsSplashShown] = useState<boolean>(
    sessionStorage.getItem("isSplashShown") ? true : false
  );

  console.log(isSplashShown, getCache("isSplashShown"));

  return (
    <SplashContext.Provider value={{ isSplashShown, setIsSplashShown }}>
      {children}
    </SplashContext.Provider>
  );
};

export default SplashContext;

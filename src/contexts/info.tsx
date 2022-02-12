import React, { useState } from "react";

export interface InfoDataInterface {
  name: string;
  intro: string;
  designations: string[];
}

export interface InfoContextInterface {
  infoData: InfoDataInterface;
  setInfoData: Function;
}

const InfoContext = React.createContext<InfoContextInterface | null>(null);

export const InfoProvider = ({ children }: any) => {
  const [infoData, setInfoData] = useState<InfoDataInterface | any>();

  return (
    <InfoContext.Provider value={{ infoData, setInfoData }}>
      {children}
    </InfoContext.Provider>
  );
};

export default InfoContext;

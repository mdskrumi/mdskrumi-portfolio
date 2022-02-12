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
  const [infoData, setInfoData] = useState<InfoDataInterface>({
    name: "Md. Sakibul Alam",
    intro: `With more than 2 years of experience in web frontend engineering, I have built websites and applications used by millions of users every day. I am also ready To face challenges using knowledge, perception, innovation, and Competitive mentality to pursue a long-term successful career in the dynamic and professional environment of any organization through my attitude, hard work, dedication, and determination.`,
    designations: [
      "Software Engineer",
      "Web Frontend Engineer",
      "Competitive Programmer",
    ],
  });

  console.log(infoData);

  return (
    <InfoContext.Provider value={{ infoData, setInfoData }}>
      {children}
    </InfoContext.Provider>
  );
};

export default InfoContext;

import React, { useRef } from "react";
// Components
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import Skill from "../../components/Skill";

import Projects from "../../components/Projects";
import ProjectItem from "../../components/ProjectItem";

// mybl lite images
import MyBLLiteImage1 from "../../assets/images/mybllite/mybl1.png";

// bl images
import BLImage1 from "../../assets/images/bl/bl1.png";

const Home = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          position: "absolute",
          top: "3rem",
        }}
      >
        <Intro />
        <Skill />

        <Projects title={"Projects I Done"}>
          <ProjectItem
            title={"Banglalink Website"}
            link={"https://www.banglalink.net"}
            description="Banglalink Digital Communications Ltd. is a telecommunication service provider in Bangladesh. It's the third-largest cellular service provider in Bangladesh. As of the latest statistics, Banglalink has a subscriber base of 36.90 million.
          I have developed and maintained the official banglalink website which is used by millions of users everyday. I took part in system analysis and design as well as estimated several client requirements and it’s feasibility."
            techs={[
              "React JS",
              "React-Redux",
              "Redux Saga",
              "JQuery",
              "Webpack",
              "Google Analytics",
            ]}
            images={[BLImage1]}
          />
          <ProjectItem
            title={"MyBL Lite PWA"}
            link={"https://mybl.banglalink.net"}
            description="MyBL Lite is a Progressive Web Application (PWA). It’s a clone of the Official MyBL Application with minimum features. It only contains some of the most used features from MyBL Application. MyBL Lite also has Android and IOS versions and can be found on their respective stores. 
          I was responsible from application planning to deployment. I have built the frontend of the application from scratch as a lead and single developer."
            techs={[
              "React JS",
              "React-Redux",
              "Redux Saga",
              "JQuery",
              "Firebase",
              "Styled-Component",
              "React Bootstrap",
              "JQuery-UI",
              "Webpack",
              "Google Analytics",
            ]}
            images={[MyBLLiteImage1]}
          />
        </Projects>
      </div>
    </div>
  );
};
export default React.memo(Home);

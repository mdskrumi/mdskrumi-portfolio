import React from "react";
// Components
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import Skill from "../../components/Skill";
import SkillContent from "../../components/SkillContent";
import Projects from "../../components/Projects";
import ProjectItem from "../../components/ProjectItem";

// Images
import ReactImage from "../../assets/images/reactjs.png";
import FlutterImage from "../../assets/images/flutter.png";
import NodeImage from "../../assets/images/nodejs.png";
import NextImage from "../../assets/images/nextjs.png";

// mybl lite images
import MyBLLiteImage1 from "../../assets/images/mybllite/mybl1.png";

// bl images
import BLImage1 from "../../assets/images/bl/bl1.png";

// Styles
import { HomeContainerDiv } from "./style";

const Home = () => {
  return (
    <HomeContainerDiv>
      <Header />
      <Intro />
      <Skill title={"Skills I Accuire"}>
        <SkillContent title={"React JS"} image={ReactImage} />
        <SkillContent title={"Node JS"} image={NodeImage} />
        <SkillContent title={"Next JS"} image={NextImage} />
        <SkillContent title={"Flutter"} image={FlutterImage} />
        <SkillContent title={"React Native"} image={ReactImage} />
      </Skill>
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
    </HomeContainerDiv>
  );
};
export default React.memo(Home);

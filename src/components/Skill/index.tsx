import React from "react";

import {
  SkillContainerDiv,
  SkillContainerTitleDiv,
  SkillContainerContentDiv,
} from "./style";

import SkillContent from "../SkillContent";

// Images
import ReactImage from "../../assets/images/reactjs.png";
import FlutterImage from "../../assets/images/flutter.png";
import NodeImage from "../../assets/images/nodejs.png";
import NextImage from "../../assets/images/nextjs.png";

const Skill = () => {
  return (
    <SkillContainerDiv>
      <SkillContainerTitleDiv>"Skills I Accuire"</SkillContainerTitleDiv>
      <SkillContainerContentDiv>
        <SkillContent title={"React JS"} image={ReactImage} />
        <SkillContent title={"Node JS"} image={NodeImage} />
        <SkillContent title={"Next JS"} image={NextImage} />
        <SkillContent title={"Flutter"} image={FlutterImage} />
        <SkillContent title={"React Native"} image={ReactImage} />
      </SkillContainerContentDiv>
    </SkillContainerDiv>
  );
};

export default React.memo(Skill);

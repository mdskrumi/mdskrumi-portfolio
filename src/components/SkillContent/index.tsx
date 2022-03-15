import React from "react";

import {
  SkillContentContainerDiv,
  SkillImageDiv,
  SkillDescriptionDiv,
} from "./style";

import { SkillContainerTitleDiv } from "../Skill/style";

const SkillContent = (props: any) => {
  const { title, image } = props;

  return (
    <SkillContentContainerDiv>
      <SkillImageDiv>
        <img src={image} alt={title} loading="lazy" />
      </SkillImageDiv>
      <SkillDescriptionDiv>
        <SkillContainerTitleDiv>{title}</SkillContainerTitleDiv>
      </SkillDescriptionDiv>
    </SkillContentContainerDiv>
  );
};

export default React.memo(SkillContent);

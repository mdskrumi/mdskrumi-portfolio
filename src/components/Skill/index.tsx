import React from "react";

import {
  SkillContainerDiv,
  SkillContainerTitleDiv,
  SkillContainerContentDiv,
} from "./style";

const Skill = (props: any) => {
  const { title, children } = props;
  return (
    <SkillContainerDiv>
      <SkillContainerTitleDiv>{title}</SkillContainerTitleDiv>
      <SkillContainerContentDiv>{children}</SkillContainerContentDiv>
    </SkillContainerDiv>
  );
};

export default React.memo(Skill);

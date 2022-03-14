import React from "react";

import {
  ProjectContainerDiv,
  ProjectContainerTitleDiv,
  ProjectContentsDiv,
} from "./style";

const Projects = (props: any) => {
  const { title, children } = props;
  return (
    <ProjectContainerDiv>
      <ProjectContainerTitleDiv>{title}</ProjectContainerTitleDiv>
      <ProjectContentsDiv>{children}</ProjectContentsDiv>
    </ProjectContainerDiv>
  );
};

export default React.memo(Projects);

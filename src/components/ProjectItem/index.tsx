import React from "react";
import {
  ProjectContentContainerDiv,
  ProjectContentContainerTitleDiv,
  ProjectImagesDiv,
  ProjectImagesImage,
  ProjectWatchLiveDiv,
  ProjectDescriptionDiv,
  ProjectWatchLiveA,
} from "./style";

interface ProjectItemProps {
  title: string;
  link: string;
  description: string;
  techs: string[];
  images: string[];
}

const ProjectItem = (props: ProjectItemProps) => {
  const { title, link, images, description, techs } = props;

  return (
    <ProjectContentContainerDiv>
      <ProjectContentContainerTitleDiv>{title}</ProjectContentContainerTitleDiv>
      <ProjectDescriptionDiv>{description}</ProjectDescriptionDiv>
      <ProjectDescriptionDiv>
        Technologies:{" "}
        {techs.map(
          (tech, index) => tech + (index < techs.length - 1 ? ", " : "")
        )}
      </ProjectDescriptionDiv>
      <ProjectImagesDiv>
        <ProjectWatchLiveDiv>
          <ProjectWatchLiveA href={link} target="_blank" rel="noreferrer">
            Watch Live
          </ProjectWatchLiveA>
        </ProjectWatchLiveDiv>
        <ProjectImagesImage src={images[0]} alt={title} loading="lazy" />
      </ProjectImagesDiv>
    </ProjectContentContainerDiv>
  );
};

export default React.memo(ProjectItem);

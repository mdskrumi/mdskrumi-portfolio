import React from "react";
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
    <div className="project_content_container">
      <div className="title">{title}</div>
      <div className="project_decs">{description}</div>
      <div className="project_decs project_used_techs">
        Technologies:{" "}
        {techs.map((tech, index) => (
          <>{tech + (index < techs.length - 1 ? ", " : "")}</>
        ))}
      </div>
      <div className="project_images">
        <div className="project_watch_live">
          <a href={link} target="_blank" rel="noreferrer">
            Watch Live
          </a>
        </div>
        <img
          className={`${title}_project_image_${0}`}
          src={images[0]}
          alt={title}
        />
      </div>
    </div>
  );
};

export default React.memo(ProjectItem);

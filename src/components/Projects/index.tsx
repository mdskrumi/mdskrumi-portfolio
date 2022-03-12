import React from "react";

const Projects = (props: any) => {
  const { title, children } = props;
  return (
    <div className="project_container">
      <div className="title">{title}</div>
      <div className="project_contents">{children}</div>
    </div>
  );
};

export default React.memo(Projects);

import React from "react";

const Skill = (props: any) => {
  const { title = "Default Title", children } = props;
  return (
    <div className="skill_container">
      <div className="title">{title}</div>
      <div className="skill_contents">{children}</div>
    </div>
  );
};

export default React.memo(Skill);

import React from "react";

const SkillContent = (props: any) => {
  const { title, image } = props;

  return (
    <div className={`skill_content_container ${title}`}>
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="description">
        <div className="title">{title}</div>
        {/* <div className="skill_short_des"></div> */}
      </div>
    </div>
  );
};

export default React.memo(SkillContent);

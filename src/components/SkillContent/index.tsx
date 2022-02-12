const SkillContent = (props: any) => {
  const { title, image } = props;

  return (
    <div className="skill_content_container">
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

export default SkillContent;

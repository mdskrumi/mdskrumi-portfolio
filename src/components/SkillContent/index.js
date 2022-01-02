const SkillContent = (props) => {
  const { title, image, alt, details } = props;

  return (
    <div className="skill_content_container">
      <div className="image">
        <img src={image} alt={alt} />
      </div>
      <div className="description">
        <div className="title">{title}</div>
        <div className="details"></div>
      </div>
    </div>
  );
};

export default SkillContent;

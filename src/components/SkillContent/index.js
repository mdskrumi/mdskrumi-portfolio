const SkillContent = (props) => {
  const { title, image, details } = props;

  return (
    <div className="skill_content_container">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="description">
        <div className="title">{title}</div>
        {/* <div className="details">{details}</div> */}
      </div>
    </div>
  );
};

export default SkillContent;

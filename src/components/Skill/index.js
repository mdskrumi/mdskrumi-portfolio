const Skill = (props) => {
  const { title = "Default Title", children } = props;
  return (
    <div className="skill_container">
      <div className="title">{title}</div>
      <div className="skill_contents">{children}</div>
    </div>
  );
};

export default Skill;

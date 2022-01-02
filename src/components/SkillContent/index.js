import { Line } from "rc-progress";

const SkillContent = (props) => {
  const { title, image, percent } = props;

  return (
    <div className="skill_content_container">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="description">
        <div className="title">{title}</div>
        <Line
          percent={percent}
          strokeWidth="3"
          strokeColor="#D3D3D3"
          trailWidth="1"
          strokeLinecap="square"
        />
      </div>
    </div>
  );
};

export default SkillContent;

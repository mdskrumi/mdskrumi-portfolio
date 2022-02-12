// Components
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import Skill from "../../components/Skill";
import SkillContent from "../../components/SkillContent";

// Images
import ReactImage from "../../assets/images/reactjs.png";
import FlutterImage from "../../assets/images/flutter.png";
import NodeImage from "../../assets/images/nodejs.png";
import NextImage from "../../assets/images/nextjs.png";

const Home = () => {
  return (
    <div className="home_container">
      <Header />
      <Intro />
      <Skill title={"Skills I Accuire"}>
        <SkillContent title={"React JS"} image={ReactImage} />
        <SkillContent title={"Node JS"} image={NodeImage} />
        <SkillContent title={"Next JS"} image={NextImage} />
        <SkillContent title={"Flutter"} image={FlutterImage} />
        <SkillContent title={"React Native"} image={ReactImage} />
      </Skill>
    </div>
  );
};
export default Home;

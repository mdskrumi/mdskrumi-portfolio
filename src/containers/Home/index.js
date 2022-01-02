// Components
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import Skill from "../../components/Skill";
import SkillContent from "../../components/SkillContent";

// Images
import ReactImage from "../../assets/images/reactjs.png";
import FlutterImage from "../../assets/images/flutter.png";

const Home = () => {
  return (
    <div className="home_container">
      <Header />
      <Intro />
      <Skill title={"Skills I Accuired"}>
        <SkillContent title={"React JS"} image={ReactImage} alt="React js" />
      </Skill>
    </div>
  );
};
export default Home;

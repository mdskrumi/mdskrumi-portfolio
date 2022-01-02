// Components
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import Skill from "../../components/Skill";
import SkillContent from "../../components/SkillContent";

// Images
import ReactImage from "../../assets/images/reactjs.png";
import FlutterImage from "../../assets/images/flutter.png";
import NodeImage from "../../assets/images/nodejs.png";

const Home = () => {
  return (
    <div className="home_container">
      <Header />
      <Intro />
      <Skill title={"Skills I Accuired"}>
        <SkillContent
          title={"React JS"}
          image={ReactImage}
          details="I know this and this"
        />
        <SkillContent
          title={"Flutter"}
          image={FlutterImage}
          details="I know this and this"
        />
        <SkillContent
          title={"React Native"}
          image={ReactImage}
          details="I know this and this"
        />
        <SkillContent
          title={"Node JS"}
          image={NodeImage}
          details="I know this and this"
        />
      </Skill>
    </div>
  );
};
export default Home;

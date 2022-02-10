// import { useEffect, useRef } from "react";
// import gsap from "gsap";

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
  // const homeContainerRef = useRef<HTMLDivElement>(null);
  // const q = gsap.utils.selector(homeContainerRef);

  // useEffect(() => {
  //   gsap.timeline().from(homeContainerRef.current, { x: -window.screen.width });
  // }, []);

  return (
    <div className="home_container">
      <Header />
      <Intro />
      <Skill title={"Skills I Accuire"}>
        <SkillContent title={"React JS"} image={ReactImage} percent={90} />
        <SkillContent title={"Node JS"} image={NodeImage} percent={55} />
        <SkillContent title={"Next JS"} image={NextImage} percent={75} />
        <SkillContent title={"Flutter"} image={FlutterImage} percent={70} />
        <SkillContent title={"React Native"} image={ReactImage} percent={65} />
      </Skill>
    </div>
  );
};
export default Home;

// Components
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import Skill from "../../components/Skill";
import SkillContent from "../../components/SkillContent";
import Projects from "../../components/Projects";
import ProjectItem from "../../components/ProjectItem";

// Images
import ReactImage from "../../assets/images/reactjs.png";
import FlutterImage from "../../assets/images/flutter.png";
import NodeImage from "../../assets/images/nodejs.png";
import NextImage from "../../assets/images/nextjs.png";

// mybl lite images
import MyBLLiteImage1 from "../../assets/images/mybllite/mybl1.png";
import MyBLLiteImage2 from "../../assets/images/mybllite/mybl2.png";
import MyBLLiteImage4 from "../../assets/images/mybllite/mybl3.png";
import MyBLLiteImage3 from "../../assets/images/mybllite/mybl4.png";
import MyBLLiteImage5 from "../../assets/images/mybllite/mybl5.png";
import MyBLLiteImage6 from "../../assets/images/mybllite/mybl6.png";
import MyBLLiteImage7 from "../../assets/images/mybllite/mybl7.png";
import MyBLLiteImage8 from "../../assets/images/mybllite/mybl8.png";
import MyBLLiteImage9 from "../../assets/images/mybllite/mybl9.png";
import MyBLLiteImage10 from "../../assets/images/mybllite/mybl10.png";
import MyBLLiteImage11 from "../../assets/images/mybllite/mybl11.png";

// bl images
import BLImage1 from "../../assets/images/bl/bl1.png";
import BLImage2 from "../../assets/images/bl/bl2.png";
import BLImage4 from "../../assets/images/bl/bl3.png";
import BLImage3 from "../../assets/images/bl/bl4.png";
import BLImage5 from "../../assets/images/bl/bl5.png";
import BLImage6 from "../../assets/images/bl/bl6.png";
import BLImage7 from "../../assets/images/bl/bl7.png";
import BLImage8 from "../../assets/images/bl/bl8.png";
import BLImage9 from "../../assets/images/bl/bl9.png";
import BLImage10 from "../../assets/images/bl/bl10.png";
import BLImage11 from "../../assets/images/bl/bl11.png";

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
      <Projects title={"Projects I Done"}>
        <ProjectItem
          title={"Banglalink Website"}
          link={"https://www.banglalink.net"}
          description="asd"
          techs={[]}
          images={[
            BLImage1,
            BLImage2,
            BLImage4,
            BLImage3,
            BLImage5,
            BLImage6,
            BLImage7,
            BLImage8,
            BLImage9,
            BLImage10,
            BLImage11,
          ]}
        />
        <ProjectItem
          title={"MyBL Lite PWA"}
          link={"https://mybl.banglalink.net"}
          description="asd"
          techs={[]}
          images={[
            MyBLLiteImage1,
            MyBLLiteImage2,
            MyBLLiteImage4,
            MyBLLiteImage3,
            MyBLLiteImage5,
            MyBLLiteImage6,
            MyBLLiteImage7,
            MyBLLiteImage8,
            MyBLLiteImage9,
            MyBLLiteImage10,
            MyBLLiteImage11,
          ]}
        />
      </Projects>
    </div>
  );
};
export default Home;

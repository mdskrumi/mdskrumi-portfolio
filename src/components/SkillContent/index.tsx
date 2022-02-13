import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const SkillContent = (props: any) => {
  gsap.registerPlugin(ScrollTrigger);
  const { title, image } = props;

  const imageDivRef = useRef<HTMLDivElement>(null);
  const descriptionDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(imageDivRef.current, {
      scrollTrigger: {
        trigger: ".skill_container",
        start: "top center",
        end: "+=300",
        scrub: 1,
      },
      x: -window.screen.availWidth,
      duration: 2,
    });
    gsap.from(descriptionDivRef.current, {
      scrollTrigger: {
        trigger: ".skill_container",
        start: "top center",
        end: "+=300",
        scrub: 1,
      },
      x: window.screen.availWidth,
      duration: 2,
    });
  }, []);

  return (
    <div className={`skill_content_container ${title}`}>
      <div className="image" ref={imageDivRef}>
        <img src={image} alt={title} />
      </div>
      <div className="description" ref={descriptionDivRef}>
        <div className="title">{title}</div>
        {/* <div className="skill_short_des"></div> */}
      </div>
    </div>
  );
};

export default SkillContent;

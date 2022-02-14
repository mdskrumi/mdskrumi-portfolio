import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface ProjectItemProps {
  title: string;
  link: string;
  description: string;
  techs: string[];
  images: string[];
}

const ProjectItem = (props: ProjectItemProps) => {
  const { title, link, images } = props;

  const [time, setTime] = useState(Date.now());
  const imageRef = useRef<HTMLImageElement>(null);
  const [image, setImage] = useState<number>(0);

  useEffect(() => {
    gsap
      .timeline()
      .to(imageRef.current, {
        opacity: 0,
        duration: 1,
      })
      .then(() => setImage((image + 1) % images.length))
      .then(() => {
        gsap.to(imageRef.current, {
          opacity: 1,
          duration: 1,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="project_content_container">
      <div className="title">{title}</div>
      <div ref={imageRef} className="project_images">
        <div className="project_watch_live">
          <a href={link} target="_blank" rel="noreferrer">
            Watch Live
          </a>
        </div>
        <img
          className={`${title}_project_image_${image}`}
          src={images[image]}
          alt={title}
        />
      </div>
    </div>
  );
};

export default ProjectItem;

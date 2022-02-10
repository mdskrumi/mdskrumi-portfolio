import { useEffect, useRef } from "react";
import gsap from "gsap";

// Components
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";

const ContactMe = () => {
  const contactContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.timeline().from(contactContainerRef.current, {
      x: window.screen.width,
    });
  }, []);
  return (
    <div className="home_container" ref={contactContainerRef}>
      <Header />
      <ContactForm />
    </div>
  );
};
export default ContactMe;

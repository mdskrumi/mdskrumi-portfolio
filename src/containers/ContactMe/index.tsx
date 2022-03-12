import React from "react";
// Components
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";

const ContactMe = () => {
  return (
    <div className="home_container">
      <Header />
      <ContactForm />
    </div>
  );
};
export default React.memo(ContactMe);

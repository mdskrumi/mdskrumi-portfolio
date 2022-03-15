import React from "react";
// Components
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";

import { HomeContainerDiv } from "../Home/style";

const ContactMe = () => {
  return (
    <HomeContainerDiv>
      <Header />
      <ContactForm />
    </HomeContainerDiv>
  );
};
export default React.memo(ContactMe);

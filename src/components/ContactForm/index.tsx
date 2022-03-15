import React, { useEffect, useState, useRef, useContext } from "react";

// Custom Component
import Modal from "../Modal";
import ThankYouModal from "../ThankYouModal";

// Firebase
import { writeContactMeData } from "../../firebase";

import ThemeContext from "../../contexts/theme";

// Styles
import {
  ContactFormRootDiv,
  ContactFormPageTitleDiv,
  ContactFormDiv,
  ContactFormInputBatchDiv,
  ContactFormInput,
  ContactFormTextArea,
  ContactFormMaxLenIndicatorDiv,
  ContactFormSubmitDiv,
  ContactFormSubmitButton,
} from "./style";

const ContactForm = () => {
  const { theme } = useContext(ThemeContext);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const fn = useRef<HTMLInputElement>(null);
  const em = useRef<HTMLInputElement>(null);
  const pn = useRef<HTMLInputElement>(null);
  const msg = useRef<HTMLTextAreaElement>(null);

  const [maxLengthInd, setMaxLengthInd] = useState({ curr: 0, max: 0 });

  const validateEmail = (email: string) => {
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return regex.test(email);
  };

  const onSubmitData = () => {
    if (fullName.length <= 0) {
      if (fn.current) fn.current.focus();
      document.getElementById("contact_name")!.style.borderBottom =
        "2px red solid";
    } else if (email.length <= 0 || !validateEmail(email)) {
      if (em.current) em.current.focus();
      document.getElementById("contact_email")!.style.borderBottom =
        "2px red solid";
    } else if (phoneNumber.length <= 0) {
      if (pn.current) pn.current.focus();
      document.getElementById("contact_phone_number")!.style.borderBottom =
        "2px red solid";
    } else if (message.length <= 0) {
      if (msg.current) msg.current.focus();
      document.getElementById("contact_message")!.style.borderBottom =
        "2px red solid";
    } else {
      writeContactMeData(fullName, email, phoneNumber, message);
      setIsModalOpen(true);
      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
    }
  };

  useEffect(() => {
    document.getElementById("contact_name")!.style.borderBottom =
      "2px gray solid";
  }, [fullName]);

  useEffect(() => {
    document.getElementById("contact_email")!.style.borderBottom =
      "2px gray solid";
  }, [email]);

  useEffect(() => {
    document.getElementById("contact_phone_number")!.style.borderBottom =
      "2px gray solid";
  }, [phoneNumber]);

  useEffect(() => {
    document.getElementById("contact_message")!.style.borderBottom =
      "2px gray solid";
  }, [message]);

  return (
    <>
      <ContactFormRootDiv>
        <ContactFormPageTitleDiv>Contact Me</ContactFormPageTitleDiv>
        <ContactFormDiv>
          <ContactFormInput
            theme={theme}
            id="contact_name"
            ref={fn}
            type="text"
            placeholder="Full Name"
            value={fullName}
            onFocus={() => setMaxLengthInd({ curr: fullName.length, max: 32 })}
            onChange={(e) => {
              if (e.target.value === "" || e.target.value.length <= 32) {
                setFullName(e.target.value);
                setMaxLengthInd({ curr: e.target.value.length, max: 32 });
              }
            }}
          />
          <ContactFormInputBatchDiv>
            <ContactFormInput
              theme={theme}
              id="contact_email"
              ref={em}
              type="email"
              placeholder="Email"
              value={email}
              onFocus={() => setMaxLengthInd({ curr: email.length, max: 32 })}
              onChange={(e) => {
                if (e.target.value === "" || e.target.value.length <= 32) {
                  setEmail(e.target.value);
                  setMaxLengthInd({ curr: e.target.value.length, max: 32 });
                }
              }}
            />
            <ContactFormInput
              theme={theme}
              id="contact_phone_number"
              ref={pn}
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onFocus={() =>
                setMaxLengthInd({ curr: phoneNumber.length, max: 16 })
              }
              onChange={(e) => {
                if (e.target.value === "" || e.target.value.length <= 16) {
                  setPhoneNumber(e.target.value);
                  setMaxLengthInd({ curr: e.target.value.length, max: 16 });
                }
              }}
            />
          </ContactFormInputBatchDiv>
          <ContactFormTextArea
            theme={theme}
            id="contact_message"
            ref={msg}
            placeholder="Write Your Message"
            value={message}
            onFocus={() => setMaxLengthInd({ curr: message.length, max: 300 })}
            onChange={(e) => {
              if (e.target.value === "" || e.target.value.length <= 300) {
                setMessage(e.target.value);
                setMaxLengthInd({ curr: e.target.value.length, max: 300 });
              }
            }}
          />
          {maxLengthInd.max !== 0 ? (
            <ContactFormMaxLenIndicatorDiv>{`${maxLengthInd.curr}/${maxLengthInd.max}`}</ContactFormMaxLenIndicatorDiv>
          ) : null}
        </ContactFormDiv>

        <ContactFormSubmitDiv theme={theme}>
          <ContactFormSubmitButton theme={theme} onClick={onSubmitData}>
            Send
          </ContactFormSubmitButton>
        </ContactFormSubmitDiv>
      </ContactFormRootDiv>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ThankYouModal />
      </Modal>
    </>
  );
};
export default React.memo(ContactForm);

import { useEffect, useState, useRef } from "react";

// Custom Component
import Modal from "../Modal";
import ThankYouModal from "../ThankYouModal";

// Firebase
import { writeContactMeData } from "../../firebase";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const fn = useRef();
  const em = useRef();
  const pn = useRef();
  const msg = useRef();

  const [maxLengthInd, setMaxLengthInd] = useState({ curr: 0, max: 0 });

  const validateEmail = (email) => {
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return regex.test(email);
  };

  const onSubmitData = () => {
    if (fullName.length <= 0) {
      fn.current.focus();
      document.getElementById("contact_name").style.borderBottom =
        "2px red solid";
    } else if (email.length <= 0 || !validateEmail(email)) {
      em.current.focus();
      document.getElementById("contact_email").style.borderBottom =
        "2px red solid";
    } else if (phoneNumber.length <= 0) {
      pn.current.focus();
      document.getElementById("contact_phone_number").style.borderBottom =
        "2px red solid";
    } else if (message.length <= 0) {
      msg.current.focus();
      document.getElementById("contact_message").style.borderBottom =
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
    document.getElementById("contact_name").style.borderBottom =
      "2px gray solid";
  }, [fullName]);

  useEffect(() => {
    document.getElementById("contact_email").style.borderBottom =
      "2px gray solid";
  }, [email]);

  useEffect(() => {
    document.getElementById("contact_phone_number").style.borderBottom =
      "2px gray solid";
  }, [phoneNumber]);

  useEffect(() => {
    document.getElementById("contact_message").style.borderBottom =
      "2px gray solid";
  }, [message]);

  return (
    <>
      <div className="contact_form_root">
        <div className="page_title">Contact Me</div>
        <div className="contact_form">
          <input
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
          <div className="input_batch">
            <input
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
            <input
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
          </div>
          <textarea
            id="contact_message"
            ref={msg}
            type="text"
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
            <div className="max_length_indicator">{`${maxLengthInd.curr}/${maxLengthInd.max}`}</div>
          ) : null}
        </div>

        <div className="contact_submit">
          <button className="button" onClick={onSubmitData}>
            Send
          </button>
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ThankYouModal />
      </Modal>
    </>
  );
};
export default ContactForm;

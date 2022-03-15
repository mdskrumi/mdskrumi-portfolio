import styled from "styled-components";

// export const ContactForm = styled.div`
//   @media (max-width: 600px) {
//   }
// `;

export const ContactFormRootDiv = styled.div`
  margin: auto;
  padding-top: 40px;
  width: 70%;
  @media (max-width: 600px) {
    margin: auto;
    padding-top: 40px;
    width: 90%;
  }
`;

export const ContactFormPageTitleDiv = styled.div`
  font-size: 26px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const ContactFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80%;
  padding: 20px 0px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 90%;
    padding: 15px 0px 10px 0px;
  }
`;

export const ContactFormInputBatchDiv = styled.div`
  display: flex;
  width: 100%;
`;

export const ContactFormInput = styled.input`
  text-align: center;
  background-color: transparent;
  border-top: hidden;
  border-left: hidden;
  border-right: hidden;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#ffffff";
      case "light":
        return "#000000";
    }
  }};
  font-size: 24px;
  font-family: "Lobster Two", cursive;
  padding: 20px;
  margin: 10px;
  outline: none;
  width: 100%;
  @media (max-width: 600px) {
    font-size: 16px;
    margin: 10px 5px;
    padding: 10px 0px;
  }
`;

export const ContactFormTextArea = styled.textarea`
  text-align: center;
  background-color: transparent;
  border-top: hidden;
  border-left: hidden;
  border-right: hidden;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#ffffff";
      case "light":
        return "#000000";
    }
  }};
  font-size: 24px;
  font-family: "Lobster Two", cursive;
  padding: 20px;
  margin: 10px;
  outline: none;
  height: 10vh;
  max-height: 400px;
  width: 80%;
  min-width: 280px;
  resize: none;
  @media (max-width: 600px) {
    max-height: 280px;
    width: 70%;
    min-width: 240px;
    font-size: 16px;
    margin: 10px 5px;
    padding: 10px 0px;
  }
`;

export const ContactFormMaxLenIndicatorDiv = styled.div`
  text-align: right;
  width: 100%;
`;

export const ContactFormSubmitDiv = styled.div`
  text-align: center;
  padding: 10px;
`;

export const ContactFormSubmitButton = styled.button`
  background-color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#222222";
      case "light":
        return "#ffffff";
    }
  }};
  border: none;
  color: #0f0f0f;
  cursor: pointer;
  font-size: 24px;
  font-family: "Lobster Two", cursive;
  text-align: center;
  text-shadow: 0px 0px 24px #ffffff, 0px 0px 24px #ffffff, 0px 0px 24px #ffffff;

  &:hover {
    color: ${(props) => {
      switch (props.theme) {
        case "dark":
          return "#ffffff";
        case "light":
          return "#000000";
      }
    }};
    text-shadow: 0px 0px 24px #000000, 0px 0px 24px #000000;
    font-family: "Lobster", cursive;
  }
`;

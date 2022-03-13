import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

// Images
import Loading from "../../assets/images/loading.gif";

// Styles
import {
  DoYouKnowModalDiv,
  TitleDiv,
  SubTitleDiv,
  YearDiv,
  BodyDiv,
  ModalLoadingDiv,
} from "./style";

const DoYouKnowModal = () => {
  const [knowledge, setKnowledge] = useState({
    text: null,
    year: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://numbersapi.p.rapidapi.com/${
          dayjs().month() + 1
        }/${dayjs().date()}/date`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-rapidapi-host": "numbersapi.p.rapidapi.com",
            "x-rapidapi-key":
              "5e6f87a148mshaf461c9dc7837fep1a16f9jsne92a47229a3b",
          },
        }
      ).then((res) => res.json());

      if (response.found) {
        setKnowledge({ text: response.text, year: response.year });
      }
    };
    fetchData();
  }, []);

  return (
    <DoYouKnowModalDiv>
      {knowledge.text ? (
        <>
          <TitleDiv>On This Day</TitleDiv>
          <SubTitleDiv>In Year</SubTitleDiv>
          <YearDiv>{knowledge.year}</YearDiv>
          <BodyDiv>{knowledge.text}</BodyDiv>
        </>
      ) : (
        <ModalLoadingDiv>
          <img src={Loading} alt="loading" loading="lazy" />
        </ModalLoadingDiv>
      )}
    </DoYouKnowModalDiv>
  );
};

export default DoYouKnowModal;

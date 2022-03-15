import React, { useState, useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";

// Images
import Loading from "../../assets/images/loading.gif";

import {
  DoYouKnowModalDiv,
  BodyDiv,
  ModalLoadingDiv,
  YearDiv,
} from "../DoYouKnowModal/style";
import { QuoteImageDiv } from "./style";

const DoYouKnowModal = () => {
  const [quoteData, setQuoteData] = useState({
    author: null,
    authorSlug: null,
    content: null,
  });

  const [image, setImage] = useState("");

  const fetchImage = async (name: string) => {
    const response = await fetch(`https://robohash.org/${name}`, {
      method: "GET",
    }).then((res) => res.url);

    setImage(response);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.quotable.io/random`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      if (
        response.author &&
        response.authorSlug &&
        response.content &&
        response.tags
      ) {
        setQuoteData(response);
        await fetchImage(response.authorSlug);
      } else {
        console.log("Something went wrong");
      }
    };
    fetchData();
  }, []);

  return (
    <DoYouKnowModalDiv>
      {quoteData && image ? (
        <>
          <QuoteImageDiv>
            {quoteData.author ? (
              <img src={image} alt={quoteData.author} loading="lazy" />
            ) : null}
          </QuoteImageDiv>
          <YearDiv>{quoteData.author}</YearDiv>
          <BodyDiv>
            {quoteData.content ? (
              <ReactTypingEffect
                text={`"${quoteData.content}"`}
                cursor={" "}
                speed={100}
                typingDelay={0}
                eraseDelay={100000}
              />
            ) : null}
          </BodyDiv>
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

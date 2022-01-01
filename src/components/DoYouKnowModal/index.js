import { useState, useEffect } from "react";
import dayjs from "dayjs";

// Images
import Loading from "../../assets/images/loading.gif";

const DoYouKnowModal = () => {
  const [knowledge, setKnowledge] = useState({});

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

  return knowledge.text ? (
    <div className="do_you_know_modal">
      <div className="title">On This Day</div>
      <div className="sub_title">In Year</div>
      <div className="year_div">{knowledge.year}</div>
      <div className="body">{knowledge.text}</div>
    </div>
  ) : (
    <div className="do_you_know_modal_loading">
      <img src={Loading} alt="laoding" />
    </div>
  );
};

export default DoYouKnowModal;

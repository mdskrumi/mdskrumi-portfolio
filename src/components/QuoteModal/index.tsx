import { useState, useEffect } from 'react';

// Images
import Loading from '../../assets/images/loading.gif';

const DoYouKnowModal = () => {
  const [quoteData, setQuoteData] = useState({
    author: null,
    authorSlug: null,
    content: null,
  });

  const [image, setImage] = useState('');

  const fetchImage = async (name: string) => {
    const response = await fetch(`https://robohash.org/${name}`, {
      method: 'GET',
    }).then((res) => res.url);

    setImage(response);
  };

  const fetchData = async () => {
    const response = await fetch(`https://api.quotable.io/random`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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
      console.log('Something went wrong');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="do_you_know_modal">
      {quoteData && image ? (
        <>
          <div className="quote_image">
            {quoteData.author ? (
              <img src={image} alt={quoteData.author} />
            ) : null}
          </div>
          <div className="year_div">{quoteData.author}</div>
          <div className="body">{quoteData.content}</div>
        </>
      ) : (
        <div className="do_you_know_modal_loading">
          <img src={Loading} alt="loading" />
        </div>
      )}
    </div>
  );
};

export default DoYouKnowModal;
// Custom Components
import Modal from '../Modal';
import DoYouKnowModal from '../DoYouKnowModal';
import QuoteModal from '../QuoteModal';

// Images
import AE from '../../assets/images/ae.png';
import { useState } from 'react';

// Files
import hmAudio from '../../assets/files/hm.mp3';

const DoYouKnow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const audio = new Audio(hmAudio);
  return (
    <>
      {!isModalOpen ? (
        <div
          className="do_you_know"
          onClick={() => {
            audio.play();
            setIsModalOpen(true);
          }}
        >
          <img src={AE} alt="Do You Know?" />
        </div>
      ) : null}
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {new Date().getSeconds() % 2 === 0 ? (
          <DoYouKnowModal />
        ) : (
          <QuoteModal />
        )}
      </Modal>
    </>
  );
};

export default DoYouKnow;

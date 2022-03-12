import React from "react";

const ThankYouModal = () => {
  return (
    <div className="do_you_know_modal">
      <div className="title">Thank You</div>
      <div className="body">You will be notified soon!!!</div>
    </div>
  );
};
export default React.memo(ThankYouModal);

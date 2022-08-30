import React from "react";

const Modal: React.FC = () => {
  return (
    <>
      <label for="my-modal" class="btn modal-button">
        open modal
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <p>Modal</p>
          <div class="modal-action">
            <label for="my-modal" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

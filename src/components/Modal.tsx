import React from "react";
import { Button } from "../components";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<Props> = (props) => {
  const { isModalOpen, setIsModalOpen } = props;

  return (
    <div
      className={`modal ${isModalOpen && "modal-open"}`}
      onClick={() => setIsModalOpen(false)}
    >
      <div className="modal-box flex flex-col bg-black border-2 border-white">
        <div className="w-full flex flex-col justify-center items-center">
          {props.children}
        </div>
        <Button
          title="close"
          onClick={() => setIsModalOpen(false)}
          className="hover:!scale-100 self-end"
        />
      </div>
    </div>
  );
};

export default Modal;

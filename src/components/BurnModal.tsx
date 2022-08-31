import React from "react";
import { Modal } from "../components";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BurnModal: React.FC<Props> = (props) => {
  const { isModalOpen, setIsModalOpen } = props;

  return (
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <div>Burn</div>
    </Modal>
  );
};

export default BurnModal;

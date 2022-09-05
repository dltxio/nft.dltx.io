import React from "react";
import { Button, Modal } from "../components";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  address: string;
};

const SudoApplicationModal: React.FC<Props> = (props) => {
  const { isModalOpen, setIsModalOpen, address } = props;

  const sendApplication = async () => {
    window.location.replace(
      `mailto:support@dltx.io?subject=Elevate to Sudo&body=I would like to be elevated to Sudo, my address is: ${address}`
    );
  };

  return (
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <div className="w-full text-center text-2xl font-bold mb-4">
        APPLY FOR SUDO
      </div>
      <Button
        className="m-4"
        title="send application"
        onClick={sendApplication}
        expands
      />
    </Modal>
  );
};

export default SudoApplicationModal;

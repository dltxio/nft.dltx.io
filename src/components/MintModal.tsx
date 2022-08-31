import React from "react";
import { Modal, FastForm } from "../components";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MintModal: React.FC<Props> = (props) => {
  const { isModalOpen, setIsModalOpen } = props;

  const mint = (...args: any[]) => {
    alert(...args);
  };

  return (
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <FastForm
        title="mint a new meshie"
        inputs={2}
        inputTitles={["to (address)", "startTimestamp"]}
        submitTitle="mint"
        onSubmit={mint}
        styles={{
          titleUpper: true,
          submitUpper: true
        }}
      />
    </Modal>
  );
};

export default MintModal;

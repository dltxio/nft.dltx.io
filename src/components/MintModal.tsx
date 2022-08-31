import React from "react";
import { Modal, FastForm } from "../components";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MintModal: React.FC<Props> = (props) => {
  const { isModalOpen, setIsModalOpen } = props;

  const mint = (...args: any[]) => {
    console.log(...args);
  };

  return (
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <FastForm
        title="mint a new meshie"
        inputs={[
          {
            title: "to (address)"
          },
          {
            title: "startTimestamp (uint256)"
          }
        ]}
        submitTitle="mint"
        onSubmit={mint}
        styles={{
          titleUpper: true,
          submitUpper: true,
          title: "text-white font-black text-2xl mb-2",
          inputs:
            "bg-black text-white w-full border-[1.5px] \
            border-white/20 mb-2 rounded-md px-2 py-1",
          background: "bg-black flex flex-col items-center p-4 w-full",
          submit:
            "w-full text-center bg-black text-white hover:bg-white \
            hover:text-black hover:font-bold transition-all duration-150 \
            border-2 border-white rounded-md py-1"
        }}
      />
    </Modal>
  );
};

export default MintModal;

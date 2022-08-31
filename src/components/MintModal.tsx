import React, { useState } from "react";
import { Mesh } from "../contracts/Mesh";
import { Modal, FastForm } from "../components";
import { FastFormReturnObject } from "./FastForm";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  contract: Mesh;
};

const FormInputs = [
  {
    title: "to (address)"
  },
  {
    title: "startTimestamp (uint256)"
  }
];

const MintModal: React.FC<Props> = (props) => {
  const { isModalOpen, setIsModalOpen } = props; // contract

  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const mint = (formData: FastFormReturnObject[]) => {
    try {
      const to = formData.find((data) => data.title.includes("to"));
      const startTimestamp = formData.find((data) =>
        data.title.includes("start")
      );

      if (!to || !startTimestamp) throw new Error("No form data!");

      // TODO: add mint
    } catch (error) {
      setError(error as string);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <FastForm
        title="mint a new meshie"
        inputs={FormInputs}
        submitTitle={loading ? "loading..." : "mint"}
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
      {error && <div>{error}</div>}
    </Modal>
  );
};

export default MintModal;

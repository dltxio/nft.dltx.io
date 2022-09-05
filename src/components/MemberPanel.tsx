import React, { useState } from "react";
import { Button, SudoApplicationModal } from "../components";

type Props = {
  address: string;
};

const MemberPanel: React.FC<Props> = (props) => {
  const { address } = props;

  const [isSudoApplicationModalOpen, setIsSudoApplicationModalOpen] =
    useState(false);

  return (
    <>
      <div className="w-1/3 flex flex-row justify-center mt-6">
        <Button
          title="apply for sudo"
          onClick={() => setIsSudoApplicationModalOpen(true)}
          className="hover:bg-green-600 hover:text-white hover:scale-[1.3] transition-all duration-150"
        />
      </div>

      <SudoApplicationModal
        isModalOpen={isSudoApplicationModalOpen}
        setIsModalOpen={setIsSudoApplicationModalOpen}
        address={address}
      />
    </>
  );
};

export default MemberPanel;

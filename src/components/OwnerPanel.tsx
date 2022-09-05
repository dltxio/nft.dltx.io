import React, { useState } from "react";
import { Mesh } from "../contracts/Mesh";
import { Button, MintModal, BurnModal } from "../components";

type Props = {
  contract: Mesh;
};

const OwnerPanel: React.FC<Props> = (props) => {
  const [isMintModalOpen, setIsMintModalOpen] = useState(false);
  const [isBurnModalOpen, setIsBurnModalOpen] = useState(false);

  const { contract } = props;

  return (
    <>
      <div className="w-1/3 flex flex-row justify-between mt-6">
        <Button
          title="mint"
          onClick={() => setIsMintModalOpen(true)}
          className="hover:bg-green-600 hover:text-white hover:scale-[1.3] transition-all duration-150"
        />
        <Button
          title="terminate"
          onClick={() => setIsBurnModalOpen(true)}
          className="hover:bg-red-600 hover:text-white hover:scale-[1.3] transition-all duration-150"
        />
      </div>

      <MintModal
        isModalOpen={isMintModalOpen}
        setIsModalOpen={setIsMintModalOpen}
        contract={contract}
      />
      <BurnModal
        isModalOpen={isBurnModalOpen}
        setIsModalOpen={setIsBurnModalOpen}
        contract={contract}
      />
    </>
  );
};

export default OwnerPanel;

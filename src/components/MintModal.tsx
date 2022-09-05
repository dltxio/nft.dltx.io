import React, { useState } from "react";
import { Mesh } from "../contracts/Mesh";
import { Button, Modal } from "../components";
import { ethers } from "ethers";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  contract: Mesh;
};

const MintModal: React.FC<Props> = (props) => {
  const { isModalOpen, setIsModalOpen, contract } = props;

  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [timestamp, setTimestamp] = useState<number>();
  const [transaction, setTransaction] = useState("");

  const mint = async () => {
    if (!ethers.utils.isAddress(address))
      return setError("Address must be a valid");
    if (!timestamp) return setError("No timestamp provided!");

    try {
      setError("");
      setLoading(true);
      const tx = await contract.mint(address, timestamp);
      return setTransaction(tx.hash);
    } catch (error: unknown) {
      return setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <div className="w-full text-center text-2xl font-bold mb-4">
        MINT A NEW MESHIE
      </div>
      <input
        placeholder="to (address)"
        className="w-full bg-black text-white border-2 border-white px-3 py-1 rounded-lg mb-2"
        onChange={(e) => setAddress(e.currentTarget.value)}
        maxLength={42}
      />
      <input
        placeholder="startTimestamp (uint256)"
        className="w-full bg-black text-white border-2 border-white px-3 py-1 rounded-lg mb-4"
        onChange={(e) => setTimestamp(+e.currentTarget.value)}
        type="number"
      />
      <Button
        className="w-full text-center hover:bg-white hover:text-black hover:font-black transition-all duration-150"
        title={loading ? "loading..." : "mint"}
        onClick={mint}
      />
      {error && (
        <div className="w-full text-center font-bold bg-red-600 mt-2 rounded-lg px-2 py-2 whitespace-nowrap overflow-hidden">
          {JSON.stringify(error)}
        </div>
      )}
      {transaction && (
        <div className="w-full text-center font-bold bg-green-600 mt-2 rounded-lg px-2 py-2 whitespace-nowrap overflow-hidden">
          <a
            href={`https://etherscan.io/tx/${transaction}`}
            target="_blank"
            rel="noreferrer noopener"
            className="underline cursor-pointer"
          >
            View Transaction
          </a>
        </div>
      )}
    </Modal>
  );
};

export default MintModal;

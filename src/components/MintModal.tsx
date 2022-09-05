import React, { useState } from "react";
import { Mesh } from "../contracts/Mesh";
import { Button, Modal } from "../components";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  contract: Mesh;
};

const MintModal: React.FC<Props> = (props) => {
  const { isModalOpen, setIsModalOpen, contract } = props;

  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [transaction, setTransaction] = useState("");

  const mint = async () => {
    const matchingAddress = address.match(/^0x[a-fA-F0-9]{40}$/);

    if (!matchingAddress) return setError("Address must be a valid");

    try {
      setError("");
      setLoading(true);
      const tx = await contract.mint(address, timestamp);
      setTransaction(tx.hash);
    } catch (error: any) {
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
        onChange={(e) => setTimestamp(e.currentTarget.value)}
        type="number"
      />
      <Button
        className="w-full text-center hover:scale-100"
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

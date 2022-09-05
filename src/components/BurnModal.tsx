import React, { useState } from "react";
import { Mesh } from "../contracts/Mesh";
import { Button, Modal } from "../components";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  contract: Mesh;
};

const BurnModal: React.FC<Props> = (props) => {
  const { isModalOpen, setIsModalOpen, contract } = props;

  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState<number>();
  const [transaction, setTransaction] = useState("");

  const terminate = async () => {
    if (!index) return setError("Index of meshie must be provided!");

    try {
      setError("");
      setLoading(true);
      const tx = await contract.terminateNow(index);
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
        TERMINATE A MESHIE
      </div>
      <input
        placeholder="to (address)"
        className="w-full bg-black text-white border-2 border-white px-3 py-1 rounded-lg mb-2"
        type="number"
        onChange={(e) => setIndex(+e.currentTarget.value)}
        maxLength={2}
      />
      <Button
        className="w-full text-center hover:bg-white hover:text-black hover:font-black transition-all duration-150"
        title={loading ? "loading..." : "terminate"}
        onClick={terminate}
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

export default BurnModal;

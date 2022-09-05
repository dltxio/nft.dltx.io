import React, { useState } from "react";
import { Mesh } from "../contracts/Mesh";
import { Button, MintModal, BurnModal } from "../components";
import { shortenAddress } from "../utils/shortenAddress";

type Props = {
  contract: Mesh;
  address: string;
};

const ContractPanel: React.FC<Props> = (props) => {
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState(false);

  const [isMintModalOpen, setIsMintModalOpen] = useState(false);
  const [isBurnModalOpen, setIsBurnModalOpen] = useState(false);

  const { contract, address } = props;

  const authenticate = async () => {
    try {
      setLoading(true);

      const balance = await contract.balanceOf(address);

      if (balance.toNumber() < 1)
        return setError("No meshies owned by your address!");
      setError(undefined);
      return setAuthed(true);
    } catch (err: unknown) {
      setError(err);
      return setAuthed(false);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setAuthed(false);
  };

  return (
    <div className="min-w-full min-h-full flex flex-col justify-center items-center box-border p-10">
      {authed ? (
        <div className="w-full grid grid-rows-2 grid-cols-1">
          <div className="flex items-center">
            Logged in as: {shortenAddress(address)}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="ml-2 w-5 h-5 cursor-pointer"
              onClick={logout}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </div>

          <div className="w-full flex flex-col justify-center items-center box-border">
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
          </div>
        </div>
      ) : (
        <div className="h-[40vh] flex flex-col justify-center items-center box-border">
          <Button
            title={loading ? "loading..." : "authenticate"}
            onClick={authenticate}
            expands
          />
          {error && (
            <div className="mt-4 py-2 px-4 bg-red-600 rounded-lg whitespace-nowrap overflow-hidden">
              {JSON.stringify(error)}
            </div>
          )}
        </div>
      )}

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
    </div>
  );
};

export default ContractPanel;

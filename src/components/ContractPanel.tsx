import React, { useState, useEffect } from "react";
import { Mesh } from "../contracts/Mesh";
import { Button, OwnerPanel, MemberPanel } from "../components";
import { shortenAddress } from "../utils/shortenAddress";

type Props = {
  contract: Mesh;
  address: string;
};

const ContractPanel: React.FC<Props> = (props) => {
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState(false);
  const [owner, setOwner] = useState(false);

  const { contract, address } = props;

  useEffect(() => {
    contract
      .owner()
      .then((owner) => {
        if (owner === address) return setOwner(true);
      })
      .catch((err) => setError(err));
  }, [address]);

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
            {owner ? (
              <OwnerPanel contract={contract} />
            ) : (
              <MemberPanel address={address} />
            )}
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
    </div>
  );
};

export default ContractPanel;

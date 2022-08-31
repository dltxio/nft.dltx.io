import React, { useState } from "react";
import { Mesh } from "../contracts/Mesh";
import { Button } from "../components";
import { shortenAddress } from "../utils/shortenAddress";

type Props = {
  contract: Mesh;
  address: string;
};

const ContractPanel: React.FC<Props> = (props) => {
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const { contract, address } = props;

  const authenticate = () => {
    const balance = contract.balanceOf(
      "0xe33c15ddf8d2afad6e17f9935a1af90c21ca7b0d"
    ); // TODO: make this only accessible from the Owner or approved addresses, I don't have Lorenzo's priv key though, so for now it just checks if you have one or not

    setLoading(true);

    balance.then((result) => {
      if (+result < 1) return setError("No meshies owned by your address!");

      setLoading(false);
      setError(undefined);
      setAuthed(true);
    });
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
          <div></div>
        </div>
      ) : (
        <div className="h-[40vh] flex flex-col justify-center items-center box-border">
          <Button
            title={loading ? "loading..." : "authenticate"}
            onClick={authenticate}
          />
          {error && (
            <div className="mt-4 py-2 px-4 bg-red-600 rounded-lg">{error}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContractPanel;

import React, { useEffect, useState } from "react";
import { PageLayout, Logo, ContractPanel } from "../components";
import { Mesh } from "../contracts/Mesh";
import { Mesh__factory } from "../contracts/factories";
import { useWagmi } from "../hooks";

const Dashboard: React.FC = () => {
  const wagmi = useWagmi();
  const [meshie, setMeshie] = useState<Mesh>();
  const [address, setAddress] = useState<string>();

  useEffect(() => {
    if (!wagmi.signer || !wagmi.address) return;

    if (!process.env.VITE_PROXY_ADDRESS)
      throw new Error("cannot find environment variable VITE_PROXY_ADDRESS");

    const meshieContract = Mesh__factory.connect(
      process.env.VITE_PROXY_ADDRESS,
      wagmi.signer
    );

    setMeshie(meshieContract);
    setAddress(wagmi.address);
  }, [wagmi.signer]);

  return (
    <PageLayout>
      <Logo />
      {meshie && address ? (
        <div className="w-3/4 bg-black border-[1.5px] border-white/20 rounded-xl p-4 flex flex-col justify-center items-center box-border">
          <h1 className="w-[95%] text-center text-2xl font-black border-b-[1.5px] border-white/20 pb-4">
            {">>>>> Meshie Contract Dashboard <<<<<"}
          </h1>
          <ContractPanel contract={meshie} address={address} />
        </div>
      ) : (
        <span className="text-xl">Loading...</span>
      )}
    </PageLayout>
  );
};

export default Dashboard;

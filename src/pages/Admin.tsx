import React, { useEffect, useState } from "react";
import { PageLayout, Logo } from "../components";
import { Mesh } from "../contracts/Mesh";
import { Mesh__factory } from "../contracts/factories";
import { useWagmi } from "../hooks";

const Admin: React.FC = () => {
  const wagmi = useWagmi();
  const [meshie, setMeshie] = useState<Mesh>();

  useEffect(() => {
    if (!wagmi.signer) return;

    const meshieContract = Mesh__factory.connect(
      process.env.VITE_MESHIE_ADDRESS as string,
      wagmi.signer
    );
    setMeshie(meshieContract);
  }, [wagmi.signer]);

  return (
    <PageLayout>
      <Logo />
      {meshie ? <div>Connected</div> : <span>Loading...</span>}
    </PageLayout>
  );
};

export default Admin;

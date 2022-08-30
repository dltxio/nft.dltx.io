import React from "react";
import { useWagmi } from "../hooks";
import { PageLayout, Button, Mesh, Logo } from "../components";

const Home: React.FC = () => {
  const wagmi = useWagmi();

  return (
    <PageLayout>
      <Logo />
      <div className="w-1/2 flex flex-col items-center">
        {wagmi.isConnected ? (
          <>
            <Mesh />
            <Button
              title="disconnect"
              onClick={wagmi.disconnect}
              className="mt-12 rounded-[50%] !px-5 !py-12"
            />
          </>
        ) : (
          <Button
            title="connect"
            onClick={wagmi.connect}
            className="rounded-[50%] !px-5 !py-8"
          />
        )}
      </div>
    </PageLayout>
  );
};

export default Home;

import React from "react";
import { useWagmi } from "../hooks";
import { ConnectKitButton } from "connectkit";
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
              title="go to dashboard"
              onClick={() => location.assign("/dashboard")}
              className="mt-12"
              expands
            />
            <Button
              title="disconnect"
              onClick={wagmi.disconnect}
              className="mt-12 rounded-[50%] !px-5 !py-12"
              expands
            />
          </>
        ) : (
          <ConnectKitButton.Custom>
            {({ show }) => (
              <Button
                title="connect"
                onClick={() => show && show()}
                className="rounded-[50%] !px-4 !py-8"
                expands
              />
            )}
          </ConnectKitButton.Custom>
        )}
      </div>
    </PageLayout>
  );
};

export default Home;

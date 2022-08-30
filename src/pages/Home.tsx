import { useWagmi } from "../hooks";
import { PageLayout, Button, Mesh, Modal } from "../components";

const Home = () => {
  const wagmi = useWagmi();

  return (
    <PageLayout>
      <div className="mb-16 min-w-1/5 flex flex-col text-center">
        <h1 className="text-center text-5xl font-black px-10">dltx.io</h1>
        <div className="h-[0.1rem] bg-white min-w-full" />
        <h2 className="text-center text-5xl font-black px-10">meshies</h2>
      </div>
      <div className="w-1/2 flex flex-col items-center">
        {wagmi.isConnected ? (
          <>
            <Mesh />
            <Button
              title="disconnect"
              onClick={wagmi.disconnect}
              className="mt-20"
            />
            <Modal />
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

import { useWagmi } from "../hooks";
import { PageLayout, Button, Mesh } from "../components";

const Home = () => {
  const wagmi = useWagmi();

  return (
    <PageLayout>
      <div className="mb-14 mix-w-1/5">
        <h1 className="text-center text-5xl font-black px-10">dltx.io</h1>
        <div className="h-[0.1rem] bg-white" />
        <h2 className="text-center text-5xl font-black px-10">meshies</h2>
      </div>
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
            className="rounded-[50%] !px-4 !py-8"
          />
        )}
      </div>
    </PageLayout>
  );
};

export default Home;

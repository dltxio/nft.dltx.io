import { useWagmi } from "../hooks";
import { PageLayout, Button, Mesh } from "../components";

const Home = () => {
  const wagmi = useWagmi();

  return (
    <PageLayout>
      <div className="mb-16 w-1/5">
        <h1 className="text-center text-5xl font-black">dltx.io</h1>
        <div className="h-[0.1rem] bg-white" />
        <h2 className="text-center text-5xl font-black">meshies</h2>
      </div>
      <div className="w-1/2 flex flex-col items-center">
        {wagmi.isConnected ? (
          <Mesh />
        ) : (
          <Button
            title="connect"
            onClick={wagmi.connect}
            className="rounded-[50%] !px-5 !py-8 hover:bg-white hover:text-black hover:font-black"
          />
        )}
      </div>
    </PageLayout>
  );
};

export default Home;

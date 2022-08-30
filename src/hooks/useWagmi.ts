import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

const useWagmi = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector()
  });
  const { disconnect } = useDisconnect();

  return {
    address,
    isConnected,
    connect,
    disconnect
  };
};

export default useWagmi;

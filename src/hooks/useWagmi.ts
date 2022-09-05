import { useAccount, useConnect, useDisconnect, useSigner } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

const useWagmi = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector()
  });
  const { disconnect } = useDisconnect();
  const { data: signer } = useSigner();

  return {
    address,
    isConnected,
    connect,
    disconnect,
    signer
  };
};

export default useWagmi;

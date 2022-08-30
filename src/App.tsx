import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import Home from "./pages/Home";
import { ApiProvider } from "./providers/Api";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider()
});

export const App = () => {
  return (
    <BrowserRouter>
      <ApiProvider>
        <WagmiConfig client={client}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </WagmiConfig>
      </ApiProvider>
    </BrowserRouter>
  );
};

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import { Home, Dashboard } from "./pages";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider()
});

export const App = () => {
  return (
    <BrowserRouter>
      <WagmiConfig client={client}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </WagmiConfig>
    </BrowserRouter>
  );
};

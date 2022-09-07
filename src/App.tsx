import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { Home, Dashboard } from "./pages";

const infuraId = process.env.VITE_INFURA_ID;

if (!infuraId) throw new Error("Error: no VITE_INFURA_ID env provided");

const client = createClient(
  getDefaultClient({
    appName: "Meshies",
    infuraId
  })
);

export const App = () => {
  return (
    <BrowserRouter>
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </ConnectKitProvider>
      </WagmiConfig>
    </BrowserRouter>
  );
};

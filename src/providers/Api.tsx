import React, { createContext } from "react";
import Api from "../apis/Api";

export const ApiContext = createContext<Api>(null as unknown as Api);

export const ApiProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const api = new Api(process.env.VITE_API_URL as string, true);

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};

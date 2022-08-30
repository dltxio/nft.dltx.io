import React, { useEffect } from "react";
import METADATA from "../static/metadata";

const Mesh: React.FC = () => {
  useEffect(() => {
    console.log(METADATA);
  }, []);

  return <div>Mesh</div>;
};

export default Mesh;

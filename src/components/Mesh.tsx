import React from "react";
import MeshMember from "./MeshMember";
import METADATA from "../static/metadata";

const Mesh: React.FC = () => {
  return (
    <div className="w-full flex gap-x-10 gap-y-14 flex-wrap justify-evenly">
      {METADATA.map((data, i) => (
        <MeshMember data={data} key={i} />
      ))}
    </div>
  );
};

export default Mesh;

import React, { useState } from "react";
import METADATA, { MetadataEntry } from "../static/metadata";
import { MeshMember, MeshModal } from "../components";

const Mesh: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMeshMember, setCurrentMeshMember] = useState<MetadataEntry>();

  const toggleModal = (event: React.SyntheticEvent) => {
    const member = METADATA.find(
      (data) => data.name === event.currentTarget.id
    );
    setCurrentMeshMember(member);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="w-full flex gap-x-10 gap-y-14 flex-wrap justify-evenly">
        {METADATA.map((data) => (
          <MeshMember
            key={data.name}
            data={data}
            id={data.name}
            onClick={toggleModal}
          />
        ))}
      </div>

      <MeshModal
        currentMeshMember={currentMeshMember}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default Mesh;

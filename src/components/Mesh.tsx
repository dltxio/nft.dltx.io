import React, { useState } from "react";
import METADATA from "../static/metadata";
import { MeshMember, Modal } from "../components";

const Mesh: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="w-full flex gap-x-10 gap-y-14 flex-wrap justify-evenly">
        {METADATA.map((data) => (
          <MeshMember data={data} key={data.name} onClick={toggleModal} />
        ))}
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <p>Hi</p>
      </Modal>
    </>
  );
};

export default Mesh;

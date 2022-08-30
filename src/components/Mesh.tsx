import React, { useState } from "react";
import METADATA, { MetadataEntry } from "../static/metadata";
import { MeshMember, Modal } from "../components";
import {
  shortenPgpOrReturnEmail,
  formatTwitterHandle
} from "../utils/attributeUtils";

const Mesh: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMeshMember, setCurrentMeshMember] = useState<MetadataEntry>();

  const toggleModal = (event: React.SyntheticEvent) => {
    const member = METADATA.filter(
      (data) => data.name === event.currentTarget.id
    );
    setCurrentMeshMember(member[0]);
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

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <div
          className="\
          rounded-[100%] overflow-hidden w-[14rem] h-[14rem] \
          mb-4 border-2 flex flex-col justify-center items-center"
        >
          <img
            src={currentMeshMember?.image}
            alt={currentMeshMember?.name}
            className="h-full object-cover"
          />
        </div>
        <h2 className="text-3xl font-bold">
          {currentMeshMember?.name.toUpperCase()}
        </h2>
        <h3 className="text-xl font-bold mb-4">
          {currentMeshMember?.description.toUpperCase()}
        </h3>
        <div className="w-full flex flex-row items-center gap-x-4 justify-evenly text-center mb-4 flex-wrap">
          {currentMeshMember?.attributes.map((attObject) =>
            Object.values(attObject).map(
              (attribute) =>
                attribute && (
                  <div key={attribute}>
                    {attribute.includes("@") // if the attribute includes an @ then it's either an email or pgp url, if not then it's a twitter handle
                      ? shortenPgpOrReturnEmail(attribute, true)
                      : formatTwitterHandle(attribute)}
                  </div>
                )
            )
          )}
        </div>
      </Modal>
    </>
  );
};

export default Mesh;

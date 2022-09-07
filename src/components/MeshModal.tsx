import React from "react";
import { MetadataEntry, ADDITIONAL_METADATA } from "../static/metadata";
import { Modal } from "../components";
import {
  shortenPgpOrReturnEmail,
  formatTwitterHandle,
  formatGithubHandle,
  formatEnsAddress
} from "../utils/attributeUtils";

type Props = {
  currentMeshMember: MetadataEntry | undefined;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MeshModal: React.FC<Props> = (props) => {
  const { currentMeshMember, isModalOpen, setIsModalOpen } = props;

  if (!currentMeshMember) return null;

  const additionalData = ADDITIONAL_METADATA.find(
    (additional) => additional.name === currentMeshMember.name
  );

  if (!additionalData) return null;

  return (
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <div
        className="\
          rounded-[100%] overflow-hidden w-[14rem] h-[14rem] \
          mb-4 border-2 flex flex-col justify-center items-center"
      >
        <img
          src={currentMeshMember.image}
          alt={currentMeshMember.name}
          className="h-full object-cover"
        />
      </div>
      <h2 className="text-3xl font-bold">
        {currentMeshMember.name.toUpperCase()}
      </h2>
      <h3 className="text-xl font-bold mb-4">
        {currentMeshMember.description.toUpperCase()}
      </h3>
      <div className="w-full flex flex-row items-center gap-x-4 justify-evenly text-center mb-4 flex-wrap">
        {currentMeshMember.attributes.map((attObject) =>
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
      <div className="w-full flex flex-row items-center gap-x-4 justify-evenly text-center mb-4 flex-wrap">
        {formatGithubHandle(additionalData.github)}
        {additionalData.ens && formatEnsAddress(additionalData.ens)}
      </div>
    </Modal>
  );
};

export default MeshModal;

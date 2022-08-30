import React from "react";
import { MetadataEntry } from "../static/metadata";
import { shortenPGP, formatTwitterHandle } from "../utils/attributeUtils";

type Props = {
  data: MetadataEntry;
};

const MeshMember: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <div className="flex flex-col justify-start items-center text-center">
      <div className="rounded-[100%] overflow-hidden w-[10rem] h-[10rem] mb-2 border-2 border-white flex flex-col justify-center items-center">
        <img src={data.image} alt={data.name} className="h-full object-cover" />
      </div>
      <h2 className="font-bold text-xl">{data.name.toUpperCase()}</h2>
      {data.attributes.map((attObject) =>
        Object.values(attObject).map((attribute, i) => (
          <div key={i} className="textlg">
            {attribute.includes("@")
              ? shortenPGP(attribute)
              : formatTwitterHandle(attribute)}
          </div>
        ))
      )}
    </div>
  );
};

export default MeshMember;

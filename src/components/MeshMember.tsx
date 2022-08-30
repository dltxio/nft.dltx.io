import React, { useState } from "react";
import { MetadataEntry } from "../static/metadata";
import {
  shortenPgpOrReturnEmail,
  formatTwitterHandle
} from "../utils/attributeUtils";

type Props = {
  data: MetadataEntry;
  onClick: (event: React.SyntheticEvent) => void;
  id: string;
};

const MeshMember: React.FC<Props> = (props) => {
  const [hovering, setHovering] = useState(false);

  const { data, onClick, id } = props;

  return (
    <div
      className="\
        flex flex-col justify-start items-center text-center \
        bg-black border-[1.5px] border-white/20 px-6 py-4 \
        rounded-xl shadow-2xl cursor-pointer hover:scale-[1.1] \
        duration-200 transition-all hover:!bg-white"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={onClick}
      id={id}
    >
      <div
        className="\
        rounded-[100%] overflow-hidden w-[10rem] h-[10rem] \
        mb-4 border-2 flex flex-col justify-center items-center"
      >
        <img src={data.image} alt={data.name} className="h-full object-cover" />
      </div>
      <h2
        className={`font-bold text-xl max-w-[15ch] transition-all duration-200 ${
          hovering && "text-black"
        }`}
      >
        {data.name.toUpperCase()}
      </h2>
      {data.attributes.map((attObject) =>
        Object.values(attObject).map(
          (attribute) =>
            attribute && (
              <div
                key={attribute}
                className={`transition-all duration-200 ${
                  hovering && "text-black font-bold"
                }`}
              >
                {attribute.includes("@") // if the attribute includes an @ then it's either an email or pgp url, if not then it's a twitter handle
                  ? shortenPgpOrReturnEmail(attribute, false)
                  : formatTwitterHandle(attribute)}
              </div>
            )
        )
      )}
    </div>
  );
};

export default MeshMember;

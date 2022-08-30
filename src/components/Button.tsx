import React from "react";

type Props = {
  title: string;
  onClick: (...args: any[]) => void;
};

const Button: React.FC<Props> = (props) => {
  const { title, onClick } = props;

  return (
    <div
      className="px-4 py-2 border-2 border-white bg-black rounded-xl cursor-pointer hover:scale-[1.2] transition-all duration-150 shadow-xl"
      onClick={onClick}
    >
      {title.toUpperCase()}
    </div>
  );
};

export default Button;

import React from "react";

type Props = {
  title: string;
  onClick: (...args: any[]) => void;
  className?: string;
};

const Button: React.FC<Props> = (props) => {
  const { title, onClick, className = "" } = props;

  const defaultStyles =
    "px-4 py-2 border-2 border-white bg-black rounded-xl cursor-pointer hover:scale-[1.2] transition-all duration-200 shadow-xl hover:bg-white hover:text-black hover:font-black";
  const newClassnames = `${defaultStyles} ${className}`;

  return (
    <button className={newClassnames} onClick={onClick}>
      {title.toUpperCase()}
    </button>
  );
};

export default Button;

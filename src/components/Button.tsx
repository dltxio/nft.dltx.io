import React from "react";

type Props = {
  title: string;
  onClick: (...args: any[]) => void;
  className?: string;
  expands?: true;
};

const Button: React.FC<Props> = (props) => {
  const { title, onClick, className = "", expands } = props;

  const defaultStyles =
    "px-4 py-2 border-2 border-white bg-black rounded-xl cursor-pointer \
    shadow-xl";
  const newClassnames = `
    ${defaultStyles} 
    ${className} 
    ${
      expands &&
      "hover:bg-white hover:text-black hover:font-black hover:scale-[1.2] transition-all duration-200"
    }`;

  return (
    <div className={newClassnames} onClick={onClick}>
      {title.toUpperCase()}
    </div>
  );
};

export default Button;

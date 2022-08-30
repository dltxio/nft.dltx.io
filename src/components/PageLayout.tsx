import React from "react";

const PageLayout: React.FC = (props) => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-black bg-hero-diagonal-stripes">
      {props.children}
    </div>
  );
};

export default PageLayout;

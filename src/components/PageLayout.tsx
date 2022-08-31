import React from "react";

const PageLayout: React.FC = (props) => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-center items-center bg-black bg-hero-diagonal-stripes box-border">
      {props.children}
    </div>
  );
};

export default PageLayout;

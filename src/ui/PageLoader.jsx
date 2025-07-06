import React from "react";

const PageLoader = () => {
  return (
    <div className="absolute inset-0 bg-slate-200/20 backdrop-blur-sm flex items-center justify-center">
      <div className="loader"></div>;
    </div>
  );
};

export default PageLoader;

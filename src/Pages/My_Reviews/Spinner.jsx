import React from "react";

const Spinner = () => {
  return (
    <div>
      <div className="w-full h-dvh mx-auto flex justify-center items-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    </div>
  );
};

export default Spinner;

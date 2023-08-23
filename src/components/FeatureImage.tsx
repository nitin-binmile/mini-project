import React from "react";

export const FeatureImage = () => {
  return (
    <div className="w-[350px] lg:w-[600px] xl:w-[700px]  overflow-hidden ">
      <img src="src/assets/mobile.png" className="lg:hidden w-[100%]" />
      <img src="src/assets/desktop.png" className="hidden lg:flex w-[100%]" />
    </div>
  );
};

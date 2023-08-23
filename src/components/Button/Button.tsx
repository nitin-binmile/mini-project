import React from "react";
import { ButtonPropsType } from "../../models/props";

export const Button:React.FC<ButtonPropsType> = ({ mode, children,pointer=true, ...rest }: ButtonPropsType) => {
  return (
    <div
      className={
        "flex  justify-center items-center text-[9px] shrink-0 lg:text-[14px] px-[30px] py-[8px] h-[41px] rounded-full  " + (pointer?"cursor-pointer ":'') +
        (mode == "primary"
          ? "bg-primary text-white"
          : "border-secondary border-[1px]")
      }
      {...rest}
    >
      {children}
    </div>
  );
};

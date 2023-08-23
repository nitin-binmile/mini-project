import React, { useState } from "react";
import { Button } from "./Button/Button";
import { SearchState } from "../models/props";

export const Search:React.FC = () => {
  const [search,setSearch]=useState<SearchState>("");
  const handleSearchChange=(e: React.ChangeEvent<HTMLInputElement>) => {
     setSearch(e.target.value);
  }
  return (
    <div className="flex gap-[10px]">
      <Button mode="secondary" pointer={false}>
        <input
        value={search}
          onChange={handleSearchChange}
          type="text"
          className="outline-none w-[150px] placeholder:text-[9px]"
          placeholder="Profession, position or company"
        />
        <div className="w-[13px] h-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="16"
            viewBox="0 0 23 16"
            fill="none"
          >
            <path
              d="M8.27271 12.3636H21.3636"
              stroke="#767676"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M1.72729 3.63635L21.3637 3.63635"
              stroke="#767676"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle
              cx="12.6364"
              cy="3.63636"
              r="2.63636"
              fill="white"
              stroke="#767676"
              stroke-width="2"
            />
            <circle
              cx="4.63636"
              cy="12.3637"
              r="2.63636"
              fill="white"
              stroke="#767676"
              stroke-width="2"
            />
          </svg>
        </div>
      </Button>
      <Button mode="primary">Find a job</Button>
    </div>
  );
};

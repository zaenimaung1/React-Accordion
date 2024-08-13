import React, { useState } from "react";

const App = ({faq:{question,answer,isOpen,id},togglehandle}) => {

 
  const handleToggle = () => {
    togglehandle(id);
  };
  return (
    <div className="">
      <div
        className="border p-5 border-black select-none active:scale-95 duration-100 flex justify-between items-center "
        onClick={handleToggle}
      >
        <h1 className={`text-3xl ${isOpen === false ? "":'font-bold'}`}>{question}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${isOpen === false ? "": "rotate-180 duration-200"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <p className={`p-5 bg-slate-400  ${isOpen === false ? "hidden " : ""} mb-2`}>
       {answer}
      </p>
    </div>
  );
};

export default App;

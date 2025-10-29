import React from "react";
import JsonInputBox from "../json-input/textBox/JsonInputBox";

const JsonEngine = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between items-center min-w-full sm:px-12 px-2  gap-4 ">
        {/* <div className="flex-1 border-2 "> */}
          <JsonInputBox />
        {/* </div> */}
        <div className="flex-1 border-2 text-center w-full ">two</div>
      </div>
    </>
  );
};

export default JsonEngine;

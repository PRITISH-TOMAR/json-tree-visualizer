import React from "react";
import JsonInputBox from "../json-input/textBox/JsonInputBox";
import generateNodesAndEdges from "../../utils/GenerateNodesAndEdges";

const printMe = () => {
  console.log("Hello from JsonEngine");
  generateNodesAndEdges();
}

const JsonEngine = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between items-center min-w-full sm:px-12 px-2  gap-4 ">
        <JsonInputBox />
        <div className="flex-1 border-2 text-center w-full ">two</div>
        <button onClick={()=>printMe()}>Print</button>
      </div>
    </>
  );
};

export default JsonEngine;

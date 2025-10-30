import React from "react";
import JsonInputBox from "../json-input/textBox/JsonInputBox";
import TreeViewerHandler from "../json-tree/tree-viewer/TreeViewerHandler";

const JsonEngine = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between items-center min-w-full sm:px-12 px-2  gap-4 ">
        <JsonInputBox />
        <div className="flex-1 text-center w-full h-[80vh] border-2 rounded-2xl">
          <TreeViewerHandler />
        </div>
      </div>
    </>
  );
};

export default JsonEngine;

import React, { useState } from "react";
import JsonTreeVisualizer from "./JsonTreeVisualizer";

const TreeViewerHandler = () => {
  const [treeGenerated, setTreeGenerated] = useState(false);

  return (
    <div className="flex items-center justify-center w-full h-full min-h-[60vh] bg-gray-900 rounded-2xl">
      {!treeGenerated ? (
        <button
          onClick={() => setTreeGenerated(true)}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 cursor-pointer"
        >
          Generate Tree
        </button>
      ) : (
        <JsonTreeVisualizer onReset={() => setTreeGenerated(false)} />
      )}
    </div>
  );
};

export default TreeViewerHandler;

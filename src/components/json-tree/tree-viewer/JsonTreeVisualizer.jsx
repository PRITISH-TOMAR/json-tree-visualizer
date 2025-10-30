import React, { useCallback, useState, useEffect } from "react";
import ReactFlow, { Controls, MiniMap, Background } from "reactflow";
import "reactflow/dist/style.css";
import generateNodesAndEdges from "../../../utils/GenerateNodesAndEdges";
import colorNodes from "./TreeLayout";
import { useTheme } from "../../../store/theme/handleTheme";
import { THEMES_BACKGROUNDS } from "../../../../variables/variables";

const JsonTreeVisualizer = () => {
  const [elements, setElements] = useState({ nodes: [], edges: [] });
  const { theme } = useTheme();
  const [bgColor, setBgColor] = useState(THEMES_BACKGROUNDS.LIGHT);

  const buildGraph = useCallback(() => {
    const { nodes, edges } = generateNodesAndEdges();
    setElements({ nodes, edges });
  }, []);

  useEffect(() => {
    buildGraph();
  }, [buildGraph]);

  useEffect(() => {
    setBgColor(
      THEMES_BACKGROUNDS[theme.toUpperCase()] || THEMES_BACKGROUNDS.LIGHT
    );
  }, [theme]);

  const initalFocus = useCallback(
    (reactFlowInstance) => {
      const rootNode = elements.nodes.find((node) => node.id === "0");
      if (rootNode) {
        reactFlowInstance.fitView({
          nodes: [rootNode],
          padding: 0.2,
        });
      }
    },
    [elements.nodes]
  );

  return (
    <div
      className=" w-full h-screen sm:h-[90vh] rounded-2xl  overflow-hidden transition-all duration-500 shadow-inner border-2 flex justify-center items-center"
      style={{ background: bgColor }}
    >
      <ReactFlow
        nodes={colorNodes(elements.nodes)}
        edges={elements.edges}
        nodesDraggable
        nodesConnectable
        zoomOnScroll
        zoomOnPinch
        panOnScroll
        panOnScrollMode="free"
        zoomOnDoubleClick
        onInit={initalFocus}
        fitView
      >
        <Controls
          showInteractive={false}
          position="bottom-right"
          className="rounded-full shadow-lg bg-white/70 backdrop-blur-sm"
        />
      </ReactFlow>
    </div>
  );
};

export default JsonTreeVisualizer;

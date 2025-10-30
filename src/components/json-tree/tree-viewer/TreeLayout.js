import { DEFAULT_COLORS, NODE_TYPES } from "../../../../variables/variables";

const styleNodes = (type, len) => {
    const baseSize = 60;
    const extraChars = Math.min(len*2, 40);
    const size = baseSize + extraChars;
  const basicDesign = {
    borderRadius: "50%",
    width: size,
    height: size,
    color: "#fff",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "transparent",
    boxShadow: "0 2px 5px rgba(255, 109, 109, 0.15)",
  };
  switch (type) {
    case NODE_TYPES.OBJECT:
      return {
        ...basicDesign,
        backgroundColor: DEFAULT_COLORS.OBJECT,
      };

    case NODE_TYPES.ARRAY:
      return {
        ...basicDesign,
        backgroundColor: DEFAULT_COLORS.ARRAY,
      };
    case NODE_TYPES.PRIMITIVE:
      return {
        ...basicDesign,
        backgroundColor: DEFAULT_COLORS.PRIMITIVE,
      };
    default:
      return { ...basicDesign, backgroundColor: DEFAULT_COLORS.DEFAULT };
  }
};

const colorNodes = (nodes) => {
  return nodes.map((node) => {
    return {
      ...node,
      style: styleNodes(node.type, node.data?.label?.toString().length || 0),
    };
  });
};

export default colorNodes;

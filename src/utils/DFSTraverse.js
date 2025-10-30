import { NODE_TYPES, SPACING } from "../../variables/variables";


const measureWidth = (data) => {
  if (typeof data !== "object" || data === null) return 1;
  const entries = Array.isArray(data)
    ? data.map((v, i) => [`[${i}]`, v])
    : Object.entries(data);
  if (entries.length === 0) return 1;
  return entries.map(([_, v]) => measureWidth(v)).reduce((a, b) => a + b, 0);
}


const createNode = (id, label, x, y, type = "default") => {
  return {
    id, type, data: { label }, position: { x, y }
  };
};


function handlePrimitive(value, parentId, x, y, idCounter) {

  const valueId = `${idCounter.value++}`;
  const node = createNode(valueId, String(value), x, y, NODE_TYPES.PRIMITIVE);
  const edge = { id: `e${parentId}-${valueId}`, source: parentId, target: valueId };
  return { nodes: [node], edges: [edge] };
}


function handleArray(arr, parentId, depth, leftOffset, idCounter) {
  const entries = arr.map((v, i) => [`[${i}]`, v]);
  let nodes = [];
  let edges = [];
  let offset = leftOffset;

  entries.forEach(([key, val]) => {
    const childWidth = measureWidth(val);
    const { nodes: n2, edges: e2 } = dfsTraverse(val, parentId, key, depth, offset, idCounter);

    nodes.push(...n2);
    edges.push(...e2);

    offset += childWidth * SPACING.X;
  });

  return { nodes, edges };
}

function handleObject(obj, parentId, depth, leftOffset, idCounter) {
  const entries = Object.entries(obj);
  let nodes = [];
  let edges = [];
  let offset = leftOffset;

  entries.forEach(([key, val]) => {
    const childWidth = measureWidth(val);
    const { nodes: n2, edges: e2 } = dfsTraverse(val, parentId, key, depth, offset, idCounter);

    nodes.push(...n2);
    edges.push(...e2);

    offset += childWidth * SPACING.X;
  });

  return { nodes, edges };
}

function dfsTraverse(data, parentId = null, key = "root", depth = 0, leftOffset = 0, idCounter = { value: 0 }) {

  const currentId = `${idCounter.value++}`;
  const width = measureWidth(data);
  const x = leftOffset + (width * SPACING.X) / 2;
  const y = depth * SPACING.Y;

  const dataType = Array.isArray(data) ? NODE_TYPES.ARRAY : typeof data;
  const currentNode = createNode(currentId, key, x, y, dataType);
  const nodes = [currentNode];
  const edges = [];

  if (parentId !== null) {
    edges.push({ id: `e${parentId}-${currentId}`, source: parentId, target: currentId  });
  }

  switch (dataType) {
    case "object":
      if (data !== null) {
        const { nodes: n, edges: e } = handleObject(data, currentId, depth + 1, leftOffset, idCounter);

        nodes.push(...n);
        edges.push(...e);
      }
      break;

    case "array":
      {
        const { nodes: n, edges: e } = handleArray(data, currentId, depth + 1, leftOffset,
          idCounter);

        nodes.push(...n);
        edges.push(...e);
      }
      break;

    default:
      {
        const { nodes: n, edges: e } = handlePrimitive(data, currentId, x, y + SPACING.Y,
          idCounter);

        nodes.push(...n);
        edges.push(...e);
      }
      break;
  }

  return { nodes, edges };
}

export { dfsTraverse };
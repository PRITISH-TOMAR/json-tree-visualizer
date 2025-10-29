import { current } from "@reduxjs/toolkit";
import { NODE_TYPES } from "../../variables/variables";

const dfsTraverse = (node, parentId = null, nodes = [], edges = [], currentId = { value: 0 }, depth = 0, span = 0) => {
    const nodeId = String(currentId.value++);
    const newNode = createNode(nodeId, node);
    nodes.push({ ...newNode, position: { x: depth * 220, y: span * 80 } });

    if (parentId !== null) edges.push({ id: `ed-${parentId}-${nodeId}`, source: parentId, target: nodeId });
    handleCurrentNode(newNode.nodeType, node, nodeId, depth, span, nodes, edges, currentId);
    return { nodes, edges, currentId };
};

const createNode = (nodeId, node) => {
    const type = typeof node;
    const isArray = Array.isArray(node);
    const label = isArray ? NODE_TYPES.ARRAY : type === NODE_TYPES.OBJECT && node !== null ? NODE_TYPES.OBJECT : String(node);
    const nodeType = isArray ? NODE_TYPES.ARRAY : type === NODE_TYPES.OBJECT && node !== null ? NODE_TYPES.OBJECT : NODE_TYPES.PRIMITIVE;

    return { id: nodeId, label, nodeType };
};

const handleCurrentNode = (nodeType, node, parentId, depth, span, nodes, edges, currentId) => {

    switch (nodeType) {
        case NODE_TYPES.OBJECT:
            Object.entries(node).forEach(([key, value], index) => {
                const childId = String(currentId.value++);
                const childNode = createNode(childId, key);

                nodes.push({ ...childNode, position: { x: (depth + 1) * 220, y: (span + index) * 80 } });
                edges.push({ id: `ed-${parentId}-${childId}`, source: parentId, target: childId });
                dfsTraverse(value, childId, nodes, edges, currentId, depth + 2, span + index);
            });
            break;
        case NODE_TYPES.ARRAY:
            node.forEach((item, index) => {
                const childId = String(currentId.value++);
                const childNode = createNode(childId, `Index ${index}`);
                nodes.push({ ...childNode, position: { x: (depth + 2) * 220, y: (span + index) * 80 } });
            
                edges.push({ id: `ed-${parentId}-${childId}`, source: parentId, target: childId });
                dfsTraverse(item, childId, nodes, edges, currentId, depth + 2, span + index);
            });
            break;
        case NODE_TYPES.PRIMITIVE:
            break;
    }
};

export { dfsTraverse };

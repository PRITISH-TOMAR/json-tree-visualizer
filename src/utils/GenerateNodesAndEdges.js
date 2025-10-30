import { LOCAL_STORAGE_KEYS } from "../../variables/variables";
import { dfsTraverse } from "./DFSTraverse";
import { HandleLocalStorageForJSON } from "../assets/helper/HandleLocalStorageForJSON";


const getParsedJsonFromLocalStorage = () => {
    const { getJSONFromLocalStorage } = HandleLocalStorageForJSON();
    const jsonInput = getJSONFromLocalStorage();

    if (!jsonInput) return null;
    try {
        return JSON.parse(jsonInput);
    } catch {
        return null;
    }
};

const generateNodesAndEdges = () => {
    const { nodes, edges } = dfsTraverse(getParsedJsonFromLocalStorage());
    console.log("Generated Nodes and Edges:", { nodes, edges });
    return { nodes, edges };



}


export default generateNodesAndEdges;
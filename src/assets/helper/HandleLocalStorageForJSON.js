const LOCAL_STORAGE_KEYS = {
  JSON_INPUT: "json_input_data",
};

export const HandleLocalStorageForJSON = () => {
  const saveJSONToLocalStorage = (jsonString) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.JSON_INPUT, jsonString);
  };

  const getJSONFromLocalStorage = () => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEYS.JSON_INPUT);
    return stored ? stored : null;
  };

  return { saveJSONToLocalStorage, getJSONFromLocalStorage };
};

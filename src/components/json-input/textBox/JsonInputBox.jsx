import React, { useState } from "react";
import { ValidIcons } from "../../../assets/icons/ThemeIcons";
import PlaceHolder from "../../../assets/helper/PlaceHolder";
import { useTheme } from "../../../store/theme/handleTheme";
import { THEMES } from "../../../../variables/variables";
import JsonFileUploader from "./JsonFileUploader";
import { HandleLocalStorageForJSON } from "../../../assets/helper/HandleLocalStorageForJSON";

const JsonInputBox = () => {
  const { saveJSONToLocalStorage, getJSONFromLocalStorage } =
    HandleLocalStorageForJSON();

  const [jsonInput, setJsonInput] = useState(() => {
    return getJSONFromLocalStorage() || "";
  });
  const [error, setError] = useState(null);
  const { theme } = useTheme();

  const validateJson = (value) => {
    if (value.trim() == "") {
      setError(null);
      return;
    }
    try {
      JSON.parse(value);
      setError(null);
      saveJSONToLocalStorage(value);
    } catch (err) {
      setError("Invalid JSON format");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setJsonInput(value);
    validateJson(value);
  };

  const handleFIleUpload = (file) => {
    setJsonInput(file);
    validateJson(file);
  };

  return (
    <div
      className={`flex-1 w-full p-6 bg-gray text-gray-100 rounded-2xl shadow-md ${
        theme === THEMES.DARK && "bg-gray-900 text-gray-900"
      }`}
    >
      <p className={`${
          theme === THEMES.DARK ? "text-gray-100" : "text-gray-900"
        }`}> Paste, type or upload JSON data</p>
      <textarea
        className={`w-full h-120 p-3 text-sm ${
          theme === THEMES.DARK ? "bg-gray-200 text-gray-900" : "bg-gray-900"
        } border-gray-700 rounded-lg focus:outline-none`}
        value={jsonInput}
        onChange={handleChange}
        placeholder={PlaceHolder()}
      />

      <div className="mt-4 flex items-center justify-between">
        {error ? (
          <p
            className={`${
              theme === THEMES.DARK ? "text-red-400" : "text-red-800"
            } mt-2 flex items-center gap-1 text-lg`}
          >
            {ValidIcons["incorrect"]} {error}
          </p>
        ) : (
          <p
            className={` ${
              theme === THEMES.DARK ? "text-green-400" : "text-green-800"
            } mt-2 flex items-center text-lg gap-1`}
          >
            {ValidIcons["correct"]} Valid JSON
          </p>
        )}

        <JsonFileUploader onFileLoad={handleFIleUpload} setErr={setError} />
      </div>
    </div>
  );
};

export default JsonInputBox;

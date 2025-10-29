import React from "react";

export default function JsonFileUploader({ onFileLoad, setErr }) {
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "application/json" && !file.name.endsWith(".json")) {
      setErr("Please upload a valid .json file");
      return;
    }

    try {
      const text = await file.text();
      onFileLoad(text);
    } catch (err) {
      setErr("Failed to read file. Please try again.");
    }
  };

  return (
    <label className="cursor-pointer text-sm px-3 py-1 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700">
      Upload File
      <input
        type="file"
        accept=".json,application/json"
        onChange={handleFileUpload}
        className="hidden"
      />
    </label>
  );
}

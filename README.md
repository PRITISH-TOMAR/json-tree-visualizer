# JSON Tree Visualizer

A simple web app to visualize JSON data as an interactive tree structure.

🔗 **Live Demo**: [https://json-tree-visualizer-pink.vercel.app/](https://json-tree-visualizer-pink.vercel.app/)

## Features

- **Multiple Input Options**: Paste, type, or upload JSON files
- **Real-time Validation**: Instant JSON syntax validation
- **Tree Visualization**: Interactive hierarchical tree view using DFS algorithm
- **4 Theme Options**: Light, Dark, Ocean, and Sunset themes
- **File Upload**: Support for .json files

## Quick Start

1. Paste or upload your JSON data
2. Click "Generate Tree"
3. Explore your data in tree format

## Example

```json
{
  "user": {
    "name": "John Doe",
    "age": 30,
    "contact": {
      "email": "john@example.com",
      "phone": "+1234567890"
    },
    "hobbies": ["coding", "reading"]
  }
}
```

## Screenshot:
<img width="1886" height="898" alt="image" src="https://github.com/user-attachments/assets/46881fb5-1dc6-47a0-85c2-06ca239c3dd2" />


## Algorithm

Uses **Depth-First Search (DFS)** traversal to parse and visualize JSON structures, ensuring all nested objects and arrays are properly explored and displayed in the tree hierarchy.

---

import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Editor } from "primereact/editor";
import { useEditorStore } from "../stores/editorStore";

export default function RichTextEditor() {
  const { content, setContent } = useEditorStore();
  const [isFormChanged, setIsFormChanged] = useState(false);

  const handleSave = () => {
    setContent(content);
    alert("Content saved!");
    setIsFormChanged(false);
  };

  useEffect(() => {}, [setContent]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isFormChanged) {
        e.preventDefault();
        e.returnValue = "You have unsaved changes!";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isFormChanged]);

  const handleTextChange = (e) => {
    setContent(e.htmlValue);
    setIsFormChanged(true);
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Rich Text Editor
      </Typography>
      <div className="card">
        <Editor
          value={content}
          onTextChange={handleTextChange}
          style={{ height: "280px" }}
          toolbar={{
            bold: true,
            italic: true,
            underline: true,
            strikethrough: true,
            orderedList: true,
            unorderedList: true,
          }}
        />
      </div>
      <Button variant="contained" onClick={handleSave} sx={{ mt: 2 }}>
        Save Content
      </Button>
    </Box>
  );
}

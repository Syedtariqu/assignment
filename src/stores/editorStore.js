import { create } from "zustand";

const useEditorStore = create((set) => ({
  content: JSON.parse(localStorage.getItem("richText") ), 
  setContent: (text) => {
    const contentToSave = text; 
    localStorage.setItem("richText", JSON.stringify(contentToSave)); 
    set(() => ({ content: contentToSave })); 
  },
}));

export { useEditorStore };

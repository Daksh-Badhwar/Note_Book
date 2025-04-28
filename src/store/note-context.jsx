import React from "react";

const NoteContext = React.createContext({
  notes: [],
  addNote: (note) => {},
  deleteNote: (id) => {},
});

export default NoteContext;

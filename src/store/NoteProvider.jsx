import { useState } from "react";
import NoteContext from "./note-context";

const NoteProvider = (props) => {
  const [notes, setNotes] = useState([]);

  const addNoteHandler = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const deleteNoteHandler = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const noteContext = {
    notes: notes,
    addNote: addNoteHandler,
    deleteNote: deleteNoteHandler,
  };

  return (
    <NoteContext.Provider value={noteContext}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;

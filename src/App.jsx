import { useState } from "react";
import Header from "./components/Layout/Header";
import NotesList from "./components/Notebook/NotesList";
import AddNoteForm from "./components/Notebook/AddNoteForm";
import NoteProvider from "./store/NoteProvider";

function App() {
  const [showAddNote, setShowAddNote] = useState(false);
  const [filter, setFilter] = useState("");

  const showAddNoteHandler = () => {
    setShowAddNote(true);
  };

  const closeAddNoteHandler = () => {
    setShowAddNote(false);
  };

  const filterChangeHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <NoteProvider>
      {showAddNote && <AddNoteForm onClose={closeAddNoteHandler} />}
      <Header filter={filter} onShow={showAddNoteHandler} onFilterChange={filterChangeHandler} />
      <NotesList filter={filter} />
    </NoteProvider>
  );
}

export default App;

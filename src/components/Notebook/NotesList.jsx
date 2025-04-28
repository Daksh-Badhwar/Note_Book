import { useContext } from "react";
import NoteItem from "./NoteItem";
import NoteContext from "../../store/note-context";
//Filter 
const NotesList = (props) => {
  const ctx = useContext(NoteContext);

  // Filter notes based on title and description
  const filteredNotes = ctx.notes.filter(
    (note) =>
      note.title.toLowerCase().includes(props.filter.toLowerCase()) ||
      note.description.toLowerCase().includes(props.filter.toLowerCase())
  );

  return (
    <section>
      <ul>
        {filteredNotes.length === 0 ? (
          <p>No record found</p> 
        ) : (
          filteredNotes.map((note) => <NoteItem key={note.id} note={note} />)
        )}
      </ul>
    </section>
  );
};

export default NotesList;

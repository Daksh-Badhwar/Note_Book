import { useContext } from "react";
import NoteContext from "../../store/note-context";
//core Header
const Header = (props) => {
  const ctx = useContext(NoteContext);

  // Filtered notes based on the filter input
  const filteredNotes = ctx.notes.filter((note) =>
      note.title.toLowerCase().includes(props.filter.toLowerCase()) ||
      note.description.toLowerCase().includes(props.filter.toLowerCase())
  );

  return (
    <header>
      <h1>Notebook App</h1>
      <div>
        <span>Total: {ctx.notes.length}</span>
      </div>
      <div>
        <span>Showing: {filteredNotes.length}</span>
      </div>
      <div>
        <label>Filter:</label>
        <input
          type="text"
          placeholder="Filter Notes"
          value={props.filter}
          onChange={props.onFilterChange}
        />
      </div>
      <div>
        <button onClick={props.onShow}>+ Add</button>
      </div>
      <p>List of Notes:</p>
    </header>
  );
};

export default Header;

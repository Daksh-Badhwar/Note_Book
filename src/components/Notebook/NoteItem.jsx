import { useContext } from "react";
import NoteContext from "../../store/note-context";
//Display
const NoteItem = (props) => {
  const ctx = useContext(NoteContext);

  const deleteHandler = () => {
    ctx.deleteNote(props.note.id);
  };

  return (
    <li>
      <span>{props.note.title} </span>
      <span>{props.note.description} </span>
      <button onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default NoteItem;

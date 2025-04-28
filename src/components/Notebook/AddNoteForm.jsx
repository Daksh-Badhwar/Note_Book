import { useState, useContext } from "react";
import NoteContext from "../../store/note-context";
import Modal from "../UI/Modal";
//Form and 2 way Binding
const AddNoteForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const ctx = useContext(NoteContext);

  const submitHandler = (e) => {
    e.preventDefault();
    ctx.addNote({
      id: Math.random().toString(),
      title,
      description,
    });
    setTitle(""); // optional
  setDescription(""); // optional
  props.onClose(); // fix applied here
 // Close the form after adding
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitHandler} className="add-note-form">
        <div >
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div >
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="button" onClick={props.onClose}>
            Close
          </button>
          <button type="submit">Add Note</button>
        </div>
      </form>
    </Modal>
  );
};

export default AddNoteForm;

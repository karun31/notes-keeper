import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    })
  }

  function handleClick(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    setExpanded(false);
    event.preventDefault();
  }

  function expandClick(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input name="title" onChange={handleChange} value={note.title} placeholder="Title" /> : null}
        <textarea 
        name="content" 
        onClick={expandClick}
        onChange={handleChange} 
        value={note.content} placeholder="Take a note..." 
        rows = {isExpanded ? 3 : 1} 
        />

        <Zoom in = {isExpanded}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

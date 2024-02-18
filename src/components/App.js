import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

// function createNote(noteData){
//     return (
//         <Note 
//         key = {noteData.key}
//         title = {noteData.title}
//         content = {noteData.content}
//         />
//     );
// }



function App() {
    
    const [notes, setNotes] = useState([])

    useEffect(() => {
      // Retrieve notes from localStorage when the component mounts
      const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
      setNotes(storedNotes);
    }, []);
  
    useEffect(() => {
      // Save notes to localStorage whenever the 'notes' state changes
      localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    function addNote(newNote){
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        })

        
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
      }
    return (
      <div>
        <Header />
        <CreateArea
        onAdd = {addNote} 
        />
        {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
        {/* <Note key={1} title="Note title" content="Note content" /> */}
        <Footer />
      </div>
    );
  }

export default App;
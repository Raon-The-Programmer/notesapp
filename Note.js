// src/components/Note.js
import React from 'react';
import { useNotes } from '../context/NotesContext';

const Note = ({ index, title, content }) => {
  const { deleteNote } = useNotes();

  const handleDelete = () => {
    deleteNote(index);
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Note;

// src/components/AddNote.js
import React, { useState } from 'react';
import { useNotes } from '../context/NotesContext';

const AddNote = () => {
  const { addNote } = useNotes();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNote = () => {
    if (title && content) {
      addNote(title, content);
      setTitle('');
      setContent('');
    }
  };

  return (
    <div>
      <h2>Add Note</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddNote}>Add</button>
    </div>
  );
};

export default AddNote;

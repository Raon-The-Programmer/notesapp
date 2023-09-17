// src/components/NotesList.js
import React from 'react';
import { useNotes } from '../context/NotesContext';
import Note from './Note';

const NotesList = () => {
  const { notes } = useNotes();

  return (
    <div>
      {notes.map((note, index) => (
        <Note key={index} index={index} title={note.title} content={note.content} />
      ))}
    </div>
  );
};

export default NotesList;

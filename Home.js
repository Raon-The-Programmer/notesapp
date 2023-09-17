// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import NotesList from './NotesList';

const Home = () => {
  return (
    <div>
      <h1>Notes App</h1>
      <Link to="/add">Add Note</Link>
      <NotesList />
    </div>
  );
};

export default Home;

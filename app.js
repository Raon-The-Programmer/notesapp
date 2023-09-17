// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotesProvider } from './context/NotesContext';
import Home from './components/Home';
import AddNote from './components/AddNote';

function App() {
  return (
    <NotesProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add" component={AddNote} />
        </Switch>
      </Router>
    </NotesProvider>
  );
}

export default App;

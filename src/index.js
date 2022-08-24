import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';
// import PersonalNotesApp from './components/PersonalNotesApp';
// import './styles/style.css';
import PersonalNoteApp from './components/PersonalNoteApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersonalNoteApp />
  </React.StrictMode>
);
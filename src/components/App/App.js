import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import NoteListNav from '../NoteListNav/NoteListNav';
import NotePageNav from '../NotePageNav/NotePageNav';
import NoteList from '../NoteList/NoteList';
import NotePage from '../NotePage/NotePage';
import STORE from '../../STORE';
import { getNotesForFolder, findNote, findFolder } from '../../note-functions';
import NotesContext from '../../NotesContext';
import './App.css';

class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  componentDidMount() {
    Promise.all([
      fetch(`http://localhost:9090/notes`),
      fetch(`http://localhost:9090/folders`)
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok)
          return notesRes.json().then(e => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then(e => Promise.reject(e));

        return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
        this.setState({ notes, folders });
      })
      .catch(error => {
        console.error('something went wrong' + { error });
      });
  }

  handleDelete = noteId => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    });
  };

  renderNav() {
    return (
      <div>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={NoteListNav}
          />
        ))}
        <Route path="/note/:noteId" component={NotePageNav} />
        <Route path="/add-folder" component={NotePageNav} />
        <Route path="/add-note" component={NotePageNav} />
      </div>
    );
  }

  renderMain() {
    return (
      <div>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={NoteList}
          />
        ))}
        <Route path="/note/:noteId" component={NotePage} />
      </div>
    );
  }

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      delete: this.handleDelete
    };
    return (
      <NotesContext.Provider value={value}>
        <div className="App">
          <nav className="App--nav">{this.renderNav()}</nav>
          <header className="App--header">
            <Header />
          </header>
          <main className="App--main">{this.renderMain()}</main>
        </div>
      </NotesContext.Provider>
    );
  }
}

export default App;
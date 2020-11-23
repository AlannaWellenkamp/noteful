import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Note from '../Note/Note';
import ButtonCompoonent from '../ButtonComponent/ButtonComponent';
import { getNotesForFolder } from '../../note-functions';
import './NoteList.css';
import NotesContext from '../../NotesContext';

class NoteList extends Component {

    static defaultProps = {
        match: {
            params: {}
        }
    };

    static contextType = NotesContext;

    render() {
        const { folderId } = this.props.match.params
        const { notes = [] } = this.context
        const notesForFolder = getNotesForFolder(notes, folderId)
        return (
            <section className='NoteListMain'>
                <ul>
                    {notesForFolder.map(note =>
                        <li key={note.id}>
                            <Note
                                id={note.id}
                                name={note.name}
                                modified={note.modified}
                            />
                        </li>
                    )}
                </ul>
                <div className='NoteListMain--button-container'>
                    <ButtonCompoonent
                        tag={Link}
                        to='/add-note'
                        type='button'
                        className='NoteListMain--add-note-button'
                    >
                        <br />
              Note
            </ButtonCompoonent>
                </div>
            </section>
        )
    }
}

export default NoteList;

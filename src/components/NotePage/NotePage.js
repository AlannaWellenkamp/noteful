import React, { Component } from 'react';
import Note from '../Note/Note';
import NotesContext from '../../NotesContext';
import { findNote } from '../../note-functions';
import './NotePage.css';

class NotePage extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = NotesContext;

    handleDelete = noteId => {
        this.props.history.push(`/`)
    }

    render() {
        const { notes = [] } = this.context
        const { noteId } = this.props.match.params
        const note = findNote(notes, noteId) || { content: '' }
        return (
            <section className='NotePageMain'>
                <Note
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                    onDeleteNote={this.handleDelete}
                />
                <div className='NotePageMain--content'>
                    {note.content.split(/\n \r|\n/).map((para, i) =>
                        <p key={i}>{para}</p>
                    )}
                </div>
            </section>
        )
    }
}

export default NotePage;
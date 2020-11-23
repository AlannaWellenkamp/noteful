import React, { Component } from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import NotesContext from '../../NotesContext';
import { findNote, findFolder } from '../../note-functions';
import './NotePageNav.css';

class NotePageNav extends Component {
    static defaultProps = {
        history: {
            goBack: () => { }
        },
        match: {
            params: {}
        }
    }
    static contextType = NotesContext;

    render() {
        const { notes, folders, } = this.context
        const { noteId } = this.props.match.params
        const note = findNote(notes, noteId) || {}
        const folder = findFolder(folders, note.folderId)
        return (
            <div className='NotePageNav'>
                <ButtonComponent
                    tag='button'
                    role='link'
                    onClick={() => this.props.history.goBack()}
                    className='NotePageNav__back-button'
                >
                    <br />
            Back
          </ButtonComponent>
                {folder && (
                    <h3 className='NotePageNav__folder-name'>
                        {folder.name}
                    </h3>
                )}
            </div>
        )
    }
}

export default NotePageNav;
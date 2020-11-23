import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { findNote, findFolder, countNotesForFolder } from '../../note-functions';
import NotesContext from '../../NotesContext';
import './NoteListNav.css';

class NoteListNav extends React.Component {
    static contextType = NotesContext;

    render() {
        const { folders = [], notes = [] } = this.context
        return (
            <div className='NoteListNav'>
                <ul className='NoteListNav--list'>
                    {folders.map(folder =>
                        <li key={folder.id}>
                            <NavLink
                                className='NoteListNav--folder-link'
                                to={`/folder/${folder.id}`}
                            >
                                <span className='NoteListNav--num-notes'>
                                    {countNotesForFolder(notes, folder.id)}
                                </span>
                                {folder.name}
                            </NavLink>
                        </li>
                    )}
                </ul>
                <div className='NoteListNav--button-wrapper'>
                    <ButtonComponent
                        tag={Link}
                        to='/add-folder'
                        type='button'
                        className='NoteListNav--add-folder-button'
                    >
                        <br />
              Folder
            </ButtonComponent>
                </div>
            </div>
        )
    }
}

export default NoteListNav;
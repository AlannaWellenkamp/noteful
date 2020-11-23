import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { countNotesForFolder } from '../../note-functions'
import './NoteListNav.css'

export default function NoteListNav(props) {

    NoteListNav.defaultProps = {
        folders: []
    }
    return (
        <div className='NoteListNav'>
            <ul className='NoteListNav--list'>
                {props.folders.map(folder =>
                    <li key={folder.id}>
                        <NavLink
                            className='NoteListNav--folder-link'
                            to={`/folder/${folder.id}`}
                        >
                            <span className='NoteListNav--num-notes'>
                                {countNotesForFolder(props.notes, folder.id)}
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


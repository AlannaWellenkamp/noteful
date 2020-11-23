import React from 'react'
import { Link } from 'react-router-dom'
import Note from '../Note/Note'
import ButtonCompoonent from '../ButtonComponent/ButtonComponent'
import './NoteList.css'

export default function NoteList(props) {

    NoteList.defaultProps = {
        notes: [],
    }
    return (
        <section className='NoteList'>
            <ul>
                {props.notes.map(note =>
                    <li key={note.id}>
                        <Note
                            id={note.id}
                            name={note.name}
                            modified={note.modified}
                        />
                    </li>
                )}
            </ul>
            <div className='NoteList--button-container'>
                <ButtonCompoonent
                    tag={Link}
                    to='/add-note'
                    type='button'
                    className='NoteList--add-note-button'
                >
                    <br />
          Note
        </ButtonCompoonent>
            </div>
        </section>
    )
}


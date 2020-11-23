import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import './NotePageNav.css'

export default function NotePageNav(props) {

    NotePageNav.defaultProps = {
        history: {
            goBack: () => { }
        }
    }
    return (
        <div className='NotePageNav'>
            <ButtonComponent
                tag='button'
                role='link'
                onClick={() => props.history.goBack()}
                className='NotePageNav--return'
            >
                Back
      </ButtonComponent>
            {props.folder && (
                <h3 className='NotePageNav--folder-name'>
                    {props.folder.name}
                </h3>
            )}
        </div>
    )
}


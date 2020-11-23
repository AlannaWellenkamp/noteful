import React from 'react'
import { Link } from 'react-router-dom'
import './Note.css'

export default function Note(props) {
    return (
        <div className='Note'>
            <h2 className='Note--title'>
                <Link to={`/note/${props.id}`}>
                    {props.name}
                </Link>
            </h2>
            <button className='Note--delete' type='button'>
                {' '}
        remove
      </button>
            <div className='Note--date'>
                <div className='Note--date-modified'>
                    Modified
          {' '}
                    <span className='Date'>
                        {props.modified}
                    </span>
                </div>
            </div>
        </div>
    )
}

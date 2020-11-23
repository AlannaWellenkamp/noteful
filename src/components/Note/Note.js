import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotesContext from '../../NotesContext';
import './Note.css';

class Note extends Component {
    static defaultProps = {
        onDelete: () => { },
    }
    static contextType = NotesContext;

    handleClickDelete = e => {
        e.preventDefault()
        const noteId = this.props.id

        fetch(`http://localhost:9090/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(() => {
                this.context.delete(noteId)
                this.props.onDelete(noteId)
            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        const { name, id, modified } = this.props
        return (
            <div className='Note'>
                <h2 className='Note--title'>
                    <Link to={`/note/${id}`}>
                        {name}
                    </Link>
                </h2>
                <button
                    className='Note--delete'
                    type='button'
                    onClick={this.handleClickDelete}
                >
                    remove
          </button>
                <div className='Note--dates'>
                    <div className='Note--dates-modified'>
                        Modified
              {' '}
                        <span className='Date'>
                            {modified}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}


export default Note;

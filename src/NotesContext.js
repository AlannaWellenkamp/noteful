import React from 'react';

const NotesContext = React.createContext({
    notes: [],
    folders: [],
    addFolder: () => { },
    addNote: () => { },
    delete: () => { },
});

export default NotesContext;
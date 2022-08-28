import React, {useEffect, useReducer} from 'react'
import notesReducer from '../reducers/notes'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'

const NoteApp = () => {
    // const [notes, setNotes] = useState([]);
    const [notes, dispatch] = useReducer(notesReducer, [])

    useEffect(() => {
        const notesData = JSON.parse(localStorage.getItem('notesData'));
        if(notesData){
            dispatch({type: 'POPULATE_NOTES', notes: notesData}) // 1.parametre notesReducer'daki action.type'a, 2.parametre ise action.notes'a gönderilir.
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('notesData', JSON.stringify(notes));
    }, [notes]);

    const removeNote = (title) => {
        // setNotes(notes.filter((note) => note.title !== title));
        dispatch({type: 'REMOVE_NOTE', title}) // 1.parametre notesReducer'daki action.type'a, 2.parametre ise action.title'a gönderilir.
    }

    return (
        <div className="container p-5">
            <div className="card mb-3">
                <div className="card-header">Notes</div>
                {
                    notes &&
                    <table className="table table-sm table-striped mb-0">
                        <tbody>
                            <NoteList removeNote={removeNote} notes={notes} />
                        </tbody>
                    </table>
                }
            </div>
            <div className="card mb-3">
                <div className="card-header">Add a New Note</div>
                <div className="card-body">
                <AddNoteForm dispatch={dispatch} />
            </div>
            </div>
        </div>
    )
}

export default NoteApp
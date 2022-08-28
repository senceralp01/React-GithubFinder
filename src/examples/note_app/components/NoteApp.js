import React, {useEffect, useReducer} from 'react'
import notesReducer from '../reducers/notes'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'
import NotesContext from '../context/notes-context'

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


    // context içerisine dispatch'i dahil ettiğimiz için removeNote metoduna gerek kalmadı.
    // const removeNote = (title) => {
    //     // setNotes(notes.filter((note) => note.title !== title));
    //     dispatch({type: 'REMOVE_NOTE', title}) // 1.parametre notesReducer'daki action.type'a, 2.parametre ise action.title'a gönderilir.
    // }

    //Aşağıda context provider içerisinde gönderdiğimiz değerler kapsayıcı context'in içerisindeki tüm componentlere gönderilir. İlgili component'lerde karşılama props aracılığıyla değil useContext aracılığıyla yapılır.
    return (
        <NotesContext.Provider value={{notes, dispatch}} >
            <div className="container p-5">
                <div className="card mb-3">
                    <div className="card-header">Notes</div>
                    {
                        notes &&
                        <table className="table table-sm table-striped mb-0">
                            <tbody>
                                <NoteList />
                            </tbody>
                        </table>
                    }
                </div>
                <div className="card mb-3">
                    <div className="card-header">Add a New Note</div>
                    <div className="card-body">
                    <AddNoteForm />
                </div>
                </div>
            </div>
        </NotesContext.Provider>
    )
}

export default NoteApp
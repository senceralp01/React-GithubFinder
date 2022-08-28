import React, { useContext } from "react"
import Note from "./Note"
import NotesContext from "../context/notes-context"

// Neden useContext Hook kullanıyoruz:
// Dikkat edilirse buradaki props'lar NoteList komponenti içerisinde kullanılmadan Note komponentine aktarıldı. Bu tür bir geçiş büyük uygulamalarda daha zor olacağı için Context yapısı geliştirilmiştir.

// const NoteList = ({removeNote}) => {
//     const {notes} = useContext(NotesContext);
//     return (
//         notes.map((note) => (
//             <Note key={note.title} removeNote={removeNote} note={note} />
//         ))
//     )
// }


// useContext Hook
const NoteList = () => {
    const {removeNote} = useContext(NotesContext)
    const {notes} = useContext(NotesContext);
    return (
        notes.map((note) => (
            <Note key={note.title} note={note} />
        ))
    )
}

export default NoteList
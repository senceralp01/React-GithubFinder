import React from "react"
import Note from "./Note"

// Dikkat edilirse buradaki props'lar NoteList komponenti içerisinde kullanılmadan Note komponentine aktarıldı. Bu tür bir geçiş büyük uygulamalarda daha zor olacağı için Context yapısı geliştirilmiştir. Bunu bir sonraki adımda useContext Hook'u kullanarak uygulayacağız.

const NoteList = ({removeNote, notes}) => {
    return (
        notes.map((note) => (
            <Note key={note.title} removeNote={removeNote} note={note} />
        ))
    )
}

export default NoteList
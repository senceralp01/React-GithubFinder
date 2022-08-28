import React from "react"

const Note = ({removeNote, note}) => {
    return (
        <tr key={note.title} >
            <td style={{ width: '40%' }}>{note.title}</td>
            <td>{note.body}</td>
            <td style={{ width: '3%' }}>
                <button onClick={() => removeNote(note.title)} className="btn btn-sm btn-danger">
                    <i className="fas fa-times"></i>
                </button>
            </td>
        </tr>
    )
}

export default Note
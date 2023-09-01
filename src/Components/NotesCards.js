import Note from './Note.js'
export default function NotesCards({ notes }) {


    return (
        notes.map(note => <Note key = {note.id} note = {note}/>)
    )
}
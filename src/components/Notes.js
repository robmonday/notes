import Note from './Note'
import { Table } from 'react-bootstrap'

const Notes = ({ notes, toggleImportanceOf, showAll, setShowAll, user, loginForm, noteForm }) => {
  return (
    <>
      <h1>Notes</h1>
      {user === null ? loginForm() : noteForm() } <br />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div><br />

      <Table striped>
        <tbody>
          {notes.map(note =>
            <Note
              key={note.id}
              note={note}
              toggleImportance={() => toggleImportanceOf(note.id)}
            />
          )}
        </tbody>
      </Table>
    </>
  )
}

export default Notes
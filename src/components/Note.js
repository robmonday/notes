const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <tr className='note'>
      <td>
        <span>{note.content}</span>
        <button onClick={toggleImportance}>{label}</button>
      </td>
    </tr>
  )
}

export default Note
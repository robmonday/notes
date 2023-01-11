import { useState, useEffect } from 'react'

import userService from '../services/users'

import { Table } from 'react-bootstrap'

const Users = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    userService
      .getAll()
      .then(initialUsers => setUsers(initialUsers))
  }, [])

  return (
    <>
      <h1>Users</h1>
      <Table striped>
        <tbody>
          {users.map(user =>
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  )
}

export default Users
import React, { useContext } from 'react'
import TodoList from './TodoList'

import TodoContext from '../contexts/TodoContext'

// ★Consumer, Provider
console.log({TodoContext})

const Todos = () => {
  const { state } = useContext(TodoContext)

  return (
    <>
      <h4>TODO list</h4>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
        { state.map((todo, index) => (<TodoList key={index} todo={todo} />)) }
        </tbody>
      </table>
    </>
  )
}

export default Todos

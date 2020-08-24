// import React from 'react'
import React, { useContext } from 'react'

import { DELETE_TODO } from 'actions/index'

import TodoContext from '../contexts/TodoContext'

const TodoList = ({ todo }) => {
  const { dispatch } = useContext(TodoContext)
  const id = todo.id

console.log('aaaaaaaaaaaaaaaa')
console.log({id})

  const deleteTodo = () => {
    const result = window.confirm(`id、${id}を削除しますか？`)
console.log('bbbbbbbbbbbbbb')
console.log({id})

    // dispatch
    if (result) dispatch({type: DELETE_TODO, id})
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{todo.name}</td>
      <td><button type="button" onClick={deleteTodo}>delete</button></td>
    </tr>
  )
}

export default TodoList

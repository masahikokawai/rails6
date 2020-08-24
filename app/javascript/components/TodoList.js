import React from 'react'

const TodoList = ({ dispatch, todo }) => {
  const id = todo.id
  const deleteTodo = () => {
    const result = window.confirm(`id、${id}を削除しますか？`)

    // dispatch({
    //   type: 'DELETE_TODO',
    //   id
    // })
    if (result) dispatch({type: 'DELETE_TODO', id})
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

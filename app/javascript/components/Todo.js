import React, { useReducer, useState } from 'react'
import TodoList from './TodoList'

// import reducer from '../reducers/index.js'
import reducer from '../reducers'

// useReducer
// Reducer とは、state と action を紐付けるもの
const Todo = props => {
  const [state, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  const addTodo = e => {
    // 画面リロード抑止
    e.preventDefault()
    console.log({name})

    // dispatch
    dispatch({
      type: 'CREATE_TODO',
      name
    })

    setName('')
  }

  const deleteAllTodos = e => {
    // 画面リロード抑止
    e.preventDefault()
    const result = window.confirm('全てのtodo を削除しますか？')

    // dispatch
    if (result) dispatch({ type: 'DELETE_ALL_TODO' })
  }

  const unCreateble = (name === '')

  console.log({state})

  return (
    <div>
      <h4>TODO create</h4>
      <form>
        <div>
          <label htmlFor='formName'>name</label>
          <input id='formName' value={name} onChange={e => setName(e.target.value)} />
        </div>
        <button onClick={addTodo} disabled={unCreateble}>create</button>
        <button onClick={deleteAllTodos} disabled={state.length === 0}>all delete</button>
      </form>

      <h4>TODO list</h4>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
        { state.map((todo, index) => (<TodoList key={index} todo={todo} dispatch={dispatch} />)) }
        </tbody>
      </table>
    </div>
  )
}

export default Todo

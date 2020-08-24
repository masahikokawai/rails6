import React, { useReducer } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

// import reducer from '../reducers/index.js'
import reducer from '../reducers'

// useReducer
// Reducer とは、state と action を紐付けるもの
const Todo = () => {
  const [state, dispatch] = useReducer(reducer, [])
  console.log('Todo')
  console.log({state})

  return (
    <div>
      <TodoForm state={state} dispatch={dispatch} />
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

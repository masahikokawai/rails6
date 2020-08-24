import React, { useReducer } from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos'
import TodoList from './TodoList'

import reducer from '../reducers/index.js'

import TodoContext from '../contexts/TodoContext'

// Consumer, ★Provider
console.log({TodoContext})

// useReducer
// Reducer とは、state と action を紐付けるもの
const Todo = () => {
  const [state, dispatch] = useReducer(reducer, [])
  // console.log('Todo')
  // console.log({state})

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
    <div>
      <TodoForm />
      <Todos />
    </div>
    </TodoContext.Provider>
  )
}

export default Todo

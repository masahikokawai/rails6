import React, { useEffect, useState } from "react"

const Fuga = props => {

  // console.log(props)
  const authenticityToken = props.props.authenticityToken

  const [todos, setTodos] = useState([])
  const [name, setName] = useState('')
  const [editedTodo, setEditedTodo] = useState({id:'', name:''})

  useEffect(() => {
    console.log('useEffect-2')

    fetch('/piyos', { method: 'GET' })
    .then(response => { return response.json() })
    .then(data => {
      setTodos(data)
    })
  }, [])


  const deleteTodo = (id) => {
    const result = window.confirm(`id、${id}を削除しますか？`)
    const deleteMethod = {
      method: 'DELETE',
      headers: {
       'Content-type': 'application/json; charset=UTF-8'
      },
    }

    if (result) fetch(`/piyos/${id}`, {
      // mode: 'cors',
      // headers,
      method: 'DELETE',
      // 'X-CSRF-Token': authenticityToken,
    })
    .then((res) => {
      if (!res.ok) {
        console.warn(`Failed to send experiment logs. status=${res.status}`)
      } else {
        setTodos(todos.filter(todo => todo.id !== id))
      }
    })
    .catch((error) => {
      console.warn(error)
    })
  }

  const newTodo = (todo) => {
    const formData = new FormData()
    formData.append('todo[name]', todo.name)

    fetch('/piyos', {
      method: 'POST',
      headers: {
       'Content-type': 'application/json',
       'Accept': 'application/json',
      },
      method: 'POST',
      credentials: 'cors',
      body: formData,
    })
    .then((res) => {
      if (!res.ok) {
        console.warn(`Failed to send experiment logs. status=${res.status}`)
      } else {
        setTodos([...todos, res.data])
      }
    })
    .catch((error) => {
      console.warn(error)
    })
  }

  const handleInputChange = () => e => {
    // console.log({name})
    // setName('')
    const value = e.target.value
    const name = e.target.name
    setEditedTodo({...editedTodo, [name]:value})

    console.log({[name]:value})
  }

  return (
    <div>
      <h4>TODO create</h4>
      <form
        action="/piyos"
        method="POST"
      >
        <div>
          <input type='text' name='name' value={editedTodo.name} onChange={handleInputChange()} />
        </div>
        <button onClick={()=>newTodo(editedTodo)}>create</button>


      </form>

      <h4>Todo List</h4>
      <ul>
        {
          todos.map(todo => <li key={todo.id}> {todo.id} | {todo.name} | {todo.created_at}
          <button type="button" onClick={()=>deleteTodo(todo.id)}>delete</button>
          </li>)
        }
      </ul>
    </div>
  )
}

export default Fuga

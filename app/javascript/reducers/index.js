// action = {
//   type: 'CREATE_TODO',
//   name: 'hoge'
// }
//
// # before
// state = []
// # after
// state = [
//   { id: 1, name: 'hoge' }
// ]
// 
const todos = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_TODO':
      const todo = { name: action.name }
      const length = state.length
      // let id
      // if (length === 0) {
      //   id = 1
      // } else {
      //   id = state[length - 1].id + 1
      // }
      const id = (length === 0) ? 1 : state[length - 1].id + 1
      // return [...state, {id: id, ...todo}]
      return [...state, { id, ...todo }]
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
    case 'DELETE_ALL_TODO':
      return []
    default: 
      return state
  }
}

export default todos

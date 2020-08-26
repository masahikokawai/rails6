import React, { useContext, useState } from "react";

import { CREATE_TODO, DELETE_ALL_TODO } from "../actions/index";

import TodoContext from "../contexts/TodoContext";

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [name, setName] = useState("");
  console.log("TodoForm");
  console.log({ state });

  const addTodo = (e) => {
    // 画面リロード抑止
    e.preventDefault();
    console.log({ name });

    // dispatch
    dispatch({
      type: CREATE_TODO,
      name,
    });

    setName("");
  };

  const deleteAllTodos = (e) => {
    // 画面リロード抑止
    e.preventDefault();
    const result = window.confirm("全てのtodo を削除しますか？");

    // dispatch
    if (result) dispatch({ type: DELETE_ALL_TODO });
  };

  const unCreateble = name === "";

  return (
    <>
      <h4>TODO create</h4>
      <form>
        <div>
          <label htmlFor="formName">name</label>
          <input
            id="formName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button onClick={addTodo} disabled={unCreateble}>
          create
        </button>
        <button onClick={deleteAllTodos} disabled={state.length === 0}>
          all delete
        </button>
      </form>
    </>
  );
};

export default TodoForm;

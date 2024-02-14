import React, { useState } from 'react';

import "./App.css";

const App = () => {
  let [todoInput, setTodoInput] = useState("");
  let [todoList, updateTodoList] = useState([
    {
      id: 1,
      task: "angular"
    },
    {
      id: 2,
      task: "vuejs"
    }
  ]);
  let nextId = 2;

  function addTodo() {
    if (!todoInput) {
      alert("Please enter your Todo in the input box");
    } else {
      let newTodos = [
        ...todoList,
        {
          id: ++nextId,
          task: todoInput
        }
      ];
      updateTodoList(newTodos);
      setTodoInput('');
    }
  }

  function deleteTodo(id) {
    let altered = todoList.filter((todo) => {
      return todo.id !== id;
    });
    updateTodoList(altered);
  }

  return (
    <div className="container mt-5 w-50">
      <h3 className="text-center">Todolist app by using react</h3>
      <div className="inputgroup mt-4">
        <input
          type="text"
          value={todoInput}
          className="form-control"
          onChange={(e) => {
            let tasking = e.target.value;
            setTodoInput(tasking);
          }}
        />
        <button
          onClick={() => {
            addTodo();
          }}
          className="btn btn-primary mt-2"
        >
          Add Todo
        </button>
      </div>
      <ul className="list-group mt-4">
        {todoList.map((todo) => {
          return (
            <li className="list-group-item" key={todo.id}>
              <p>{todo.task}</p>
              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;

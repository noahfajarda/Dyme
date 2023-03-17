import React, { useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [listLength, setListLength] = useState(4);
  const [todos, setTodos] = useState([
    { id: 1, text: "Grocery store" },
    { id: 2, text: "Pay Netflix" },
  ]);

  const submitForm = (event) => {
    event.preventDefault();
    const todo = event.target.add.value.trim();
    if (todo.length) {
      setListLength(listLength + 1);
      setTodos([...todos, { id: listLength + 1, text: todo }]);
      event.target.reset();
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const generateTemplate = (todo) => {
    return (
      <li key={`todo_${listLength}`}>
        <input type="checkbox" id={`todo_${listLength}`} />
        <label htmlFor={`todo_${listLength}`}>
          <span className="check"></span>
          {todo.text}
        </label>
        <i
          className="far fa-trash-alt delete"
          onClick={() => deleteTodo(todo.id)}
        ></i>
      </li>
    );
  };

  const listItems = todos.map((todo) => generateTemplate(todo));

  const lang = navigator.language;
  const date = new Date();
  const dayName = date.toLocaleString(lang, {
    weekday: "long",
  });

  return (
    <div className="todoList">
      <div className="cover-img">
        <div className="cover-inner">
          <h3 id="dayName">{dayName}</h3>
        </div>
      </div>

      <div className="content">
        <form className="add" onSubmit={submitForm}>
          <input type="text" name="add" placeholder="Add item..." />
          <div className="input-buttons">
            <button type="submit" className="add-todo">
              <i className="fas fa-plus add plus-icon"></i>
            </button>
          </div>
        </form>
        <ul className="todos align">{listItems}</ul>
      </div>
    </div>
  );
}

export default ToDoList;

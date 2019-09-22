import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./App.css";
import axios from "axios";

const loadTodos = onLoaded => {
  axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
    onLoaded(response.data);
  });
};

export const Fetch = ({ maxTodos }) => {
  const [todos, setTodos] = useState(
    [{ id: 123, title: "hello", completed: false }].slice(0, maxTodos)
  );
  // useEffect(() => {
  //   loadTodos(loadedTodos => {
  //     setTodos(loadedTodos.slice(0, 10));
  //   });
  // }, []);

  return (
    <div>
      <div>Hello Fetch World</div>
      <ol data-testid="todo-list">
        {todos.map(todo => (
          <li key={todo.id} data-testid={`todo-${todo.id}`}>
            {todo.title} {todo.completed ? "👍" : "👎"}
          </li>
        ))}
      </ol>
    </div>
  );
};

Fetch.propTypes = {
  maxTodos: PropTypes.number.isRequired
};

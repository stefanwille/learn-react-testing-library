import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const loadTodos = async (): Promise<any> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
};

export const Fetch = ({ maxTodos }: { maxTodos: number }) => {
  const [todos, setTodos] = useState(
    [{ id: 123, title: "hello", completed: false }].slice(0, maxTodos)
  );
  useEffect(() => {
    const fetchTodos = async () => {
      const loadedTodos = await loadTodos();
      setTodos(loadedTodos.slice(0, maxTodos));
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <div>Hello Fetch World</div>
      <ol data-testid="todo-list">
        {todos.map(todo => (
          <li key={todo.id} data-testid={`todo-${todo.id}`}>
            {todo.title} {todo.completed ? "DONE" : "OPEN"}
          </li>
        ))}
      </ol>
    </div>
  );
};

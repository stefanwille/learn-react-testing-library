import React from "react";
import "./App.css";

import { Fetch } from "./Fetch";
import { Counter } from "./Counter";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Fetch maxTodos={10} />
        <Counter />
      </header>
    </div>
  );
};

export default App;

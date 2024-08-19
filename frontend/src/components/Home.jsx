import React, { useState } from "react";
import CreateTodo from "./CreateTodo";

function Home() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-3xl mb-4">Todo List</h2>
      <CreateTodo />
      {todos.length === 0 ? (
        <h3 className="text-xl mt-4">No Todos</h3>
      ) : (
        todos.map((todo) => <div>{todo}</div>)
      )}
    </div>
  );
}

export default Home;

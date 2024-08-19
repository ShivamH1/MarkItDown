import React, { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import axios from "axios";
import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";

function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  });

  const handleEdit = (id) => {
    axios
      .put("http://localhost:8080/update/" + id)
      .then((res) => location.reload())
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8080/delete/" + id)
      .then((res) => location.reload())
      .catch((err) => console.log(err));
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-3xl mb-4">Todo List</h2>
      <CreateTodo />
      {todos.length === 0 ? (
        <h3 className="text-xl mt-4">No Todos</h3>
      ) : (
        todos.map((todo) => (
          <div
            key={todo._id}
            className="flex justify-between items-center text-xl w-[305px] h-10 border-solid border-2 border-zinc-700 p-2 mt-6"
          >
            <div
              className="checkbox flex items-center"
              onClick={() => handleEdit(todo._id)}
            >
              {todo.done ? (
                <BsFillCheckCircleFill className="icon mr-2 cursor-pointer"/>
              ) : (
                <BsCircleFill className="icon mr-2 cursor-pointer" />
              )}
              <p className={todo.done ? "line-through" : ""}>{todo.task}</p>
            </div>
            <div>
              <span>
                <BsFillTrashFill className="icon curson-pointer" onClick={() => handleDelete(todo._id)}/>
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;

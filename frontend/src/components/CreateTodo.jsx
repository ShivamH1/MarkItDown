import React, { useState } from "react";
import axios from "axios";

function CreateTodo() {
  const [task, setTasks] = useState();

  const handleAdd = () => {
    axios
      .post("http://localhost:8080/add", {
        task: task,
      })
      .then((res) => location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        className="w-[300px] p-3 border-2 border-solid border-black outline-none mb-4"
        onChange={(e) => setTasks(e.target.value)}
      ></input>
      <button
        className="p-3 bg-zinc-700 text-white cursor-pointer rounded-full"
        onClick={handleAdd}
      >
        Add Todo
      </button>
    </div>
  );
}

export default CreateTodo;

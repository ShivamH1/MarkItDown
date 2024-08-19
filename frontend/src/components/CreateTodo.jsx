import React, { useState } from 'react'

function CreateTodo() {
  const [task, setTasks] = useState();

  const handleAdd = () => {
    
  }

  return (
    <div className='flex flex-col items-center'>
      <input type='text' className='w-[300px] p-3 border-2 border-solid border-black outline-none mb-4' onChange={(e) => setTasks(e.target.value)}></input>
      <button className='p-3 bg-zinc-700 text-white cursor-pointer rounded-full' onClick={handleAdd}>Add Todo</button>
    </div>
  )
}

export default CreateTodo
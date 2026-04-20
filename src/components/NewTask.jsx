import { useRef, useState } from "react";

const NewTask = () => {
    const [ task,setTask ] = useState();
    const inputRef = useRef();

    function handleAddTask(){
        setTask(prevTask => {
            return{
                ...prevTask,
                taskList : [...prevTask,inputRef.current.value]
            }
        })
    }

  return (
    <div className='flex items-center gap-4'>
        <input ref={inputRef} type="text"  className='w-64 px-2 py-1 rounded-sm bg-gray-200'/>
        <button onClick={handleAddTask} className='text-gray-700 hover:text-gray-950 '>Add task</button>
    </div>
  )
}

export default NewTask;
import { useState } from "react";

const NewTask = ({onAdd}) => {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value)
  }

  function handleClick(){
    if(enteredTask.trim() === ""){
      return;
    }
    onAdd(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-gray-200"
      />
      <button
        onClick={handleClick}
        className="text-gray-700 hover:text-gray-950 "
      >
        Add task
      </button>
    </div>
  );
};

export default NewTask;

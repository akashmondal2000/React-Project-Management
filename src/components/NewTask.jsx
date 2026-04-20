import { useState,useRef } from "react";
import Modal from "./Modal.jsx";

const NewTask = ({onAdd}) => {
  const [enteredTask, setEnteredTask] = useState('');

  const modal = useRef();

  function handleChange(event) {
    setEnteredTask(event.target.value)
  }

  function handleClick(){
    if(enteredTask.trim() === ""){
      modal.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask('');
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-lg text-gray-700 font-bold my-4">Invalid Input</h2>
        <p className="text-gray-600 mb-4">
          Oops... look like you forgot to enter a value
        </p>
      </Modal>
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
    </>
  );
};

export default NewTask;

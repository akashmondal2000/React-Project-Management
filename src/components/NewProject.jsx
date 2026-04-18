import { useRef, useState } from "react";

import Input from "./Input.jsx";

const NewProject = ({onAdd}) => {

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation....
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    })
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-gray-700 hover:text-gray-950">Cancle</button>
        </li>
        <li>
          <button 
            onClick={handleSave}
           className=" py-2 px-4 rounded-md bg-gray-700 text-gray-200 hover:bg-gray-950 text-gray-100">
            Save
          </button>
        </li>
      </menu>

      <div>
        <Input type= "text" ref={title} label="Title" type="text" />
        <Input ref={description} label="Description" textarea={true} />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;

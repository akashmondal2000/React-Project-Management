import { useRef, useState } from "react";

import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

const NewProject = ({ onAdd, onCancle }) => {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation....
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // show error modal
      modal.current.open();
      return;
    }
    //
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl text-gray-700 font-bold my-4">Invalid Input</h2>
        <p className="text-gray-600 mb-4">
          Oops... look like you forgot to enter a value
        </p>
        <p className="text-gray-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-gray-700 hover:text-gray-950" onClick={onCancle}>
              Cancle
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className=" py-2 px-4 rounded-md bg-gray-700 text-gray-200 hover:bg-gray-950 text-gray-100"
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea={true} />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;

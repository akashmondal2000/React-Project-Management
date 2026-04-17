import Input from "./Input.jsx"


const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-gray-700 hover:text-gray-950">Cancle</button></li>
            <li><button className=" py-2 px-4 rounded-md bg-gray-700 text-gray-200 hover:bg-gray-950 text-gray-100">Save</button></li>
        </menu>

        <div>
            <Input label="Title" type="text"/>
            <Input label="Description" textarea={true} />
            <Input label="Due Date" />
        </div>
    </div>
  )
}

export default NewProject
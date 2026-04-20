import NewTask from "./NewTask.jsx";

const Tasks = ({ tasks, onAdd, onDelete }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-600 mb-4">Tasks</h2>

      <NewTask onAdd={onAdd} />

      {/* if no task then show this paragraph else show list of task */}
      {tasks.length === 0 && (
        <p className="text-gray-800 my-4">
          This project dose not have any tasks yet
        </p>
      )}

      {/* list of task */}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-gray-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4 bg-gray-300 p-2 rounded-md"> 
              <span>{task.text}</span>
              <button onClick={()=> onDelete(task.id)} className="text-gray-800 hover:text-red-500 ">Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;

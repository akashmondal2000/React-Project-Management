import NewTask from './NewTask.jsx';

const Tasks = () => {
  return (
    <section>
        <h2 className='text-2xl font-bold text-gray-600 mb-4'>Tasks</h2>

        <NewTask/>

        {/* if no task then show this paragraph else show list of task */}
        <p className='text-gray-800 my-4'>This project dose not have any tasks yet</p>
        {/* list of task */}
        <ul>

        </ul>
        
    </section>
  )
}

export default Tasks;
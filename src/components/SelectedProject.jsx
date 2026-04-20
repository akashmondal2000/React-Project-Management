const SelectedProject = ({project}) => {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'short',
        day:'numeric'
    })
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-gray-300">
        <div className="flex justify-between items-center ">
          <h2 className="text-3xl font-bold text-gray-600 mb-2">{project.title}</h2>
          <button className="text-gray-600 hover:text-gray-950">Delete</button>
        </div>
        <p className="mb-4 text-gray-400">{formattedDate}</p>
        <p className="text-gray-600 whitespace-pre-wrap">{project.description}</p>
      </header>

      Tasks
    </div>
  );
};

export default SelectedProject;

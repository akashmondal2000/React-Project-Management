import Button from "./Button.jsx";

const ProjectsSidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  console.log("this i side bar", projects);
  return (
    <aside className="w-1/3 px-8 py-16 bg-gray-900 text-gray-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-gray-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}> + Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {

          let cssClasses =  "w-full py-1 px-2 rounded-sm text-left hover:bg-gray-700 my-1 "

          if(project.id === selectedProjectId ){
            cssClasses += ' bg-gray-800 text-gray-200'; 
          }else{
            cssClasses += ' bg-gray-600 text-gray-400';
          }
          return (
            <li key={project.id}>
              <button
                onClick={()=> onSelectProject(project.id) }
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;

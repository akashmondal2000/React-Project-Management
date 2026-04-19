import Button from "./Button.jsx";

const ProjectsSidebar = ({onStartAddProject, projects }) => {

  console.log("this i side bar",projects)
  return (
    <aside className="w-1/3 px-8 py-16 bg-gray-900 text-gray-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-gray-200">Your Projects</h2>
        <div>
          <Button onClick={onStartAddProject}> + Add Project</Button>
        </div>
        <ul className="mt-8">
            {
              projects.map((project)=>(
                <li key={project.id}>
                  <button className="w-full py-1 px-2 bg-gray-600 rounded-sm text-left hover:bg-gray-700 my-1 text-gray-200">{project.title}</button>
                </li>
              ))
            }
        </ul>
    </aside>
  )
}

export default ProjectsSidebar
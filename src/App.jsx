import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NotProjectSelected from "./components/NotProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";

function App() {

  const [ projectState,setProjectState ] = useState({
    selectedProjectId : undefined,
    project : [] 
  });

  function handleStartAddProject (){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId : null 
      }
    })
  }

  function handleCancleAddproject (){
    setProjectState(pervState => {
      return{
        ...pervState,
        selectedProjectId : undefined
      }
    })
  }

  function handleAddProject (projectData){
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      }
      return{
        ...prevState,
        selectedProjectId : undefined,
        project:[...prevState.project, newProject]
      }
    })
  }

  // console.log(projectState);
  let content;

  if(projectState.selectedProjectId === null){
   content = <NewProject onAdd={handleAddProject} onCancle = {handleCancleAddproject} />
  }else if(projectState.selectedProjectId === undefined){
    content = <NotProjectSelected onStartAddProject = {handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectState.project} />
      {content}
    </main>
  );
}

export default App;

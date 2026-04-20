import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NotProjectSelected from "./components/NotProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleCancleAddproject() {
    setProjectState((pervState) => {
      return {
        ...pervState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        project: [...prevState.project, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((pervState) => {
      return {
        ...pervState,
        selectedProjectId: undefined,
        project: pervState.project.filter(
          (projectItem) => projectItem.id !== pervState.selectedProjectId,
        ),
      };
    });
  }

  // console.log(projectState);

  const selectedProject = projectState.project.find(
    (project) => project.id === projectState.selectedProjectId,
  );

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>;

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancle={handleCancleAddproject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NotProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.project}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;

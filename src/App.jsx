import NewProject from "./components/NewProject.jsx";
import NotProjectSelected from "./components/NotProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar/>
      <NotProjectSelected/>
      
    </main>
  );
}

export default App;

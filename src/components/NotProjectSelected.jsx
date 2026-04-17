import noProjectImage from "../assets/no-projects.png";
import Button from "./Button.jsx";

const NotProjectSelected = () => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="no project image"
        className="w-16 h-16 object-contain  mx-auto"
      />
      <h2 className="text-xl text-gray-500 font-bold my-4">No Project Selected</h2>
      <p className="text-gray-400 mb-4">Select a Project or get started with a new one</p>
      <p>
        <Button>Create New Project</Button>
      </p>
    </div>
  );
};

export default NotProjectSelected;

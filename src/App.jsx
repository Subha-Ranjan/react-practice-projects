import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelectSelected from "./components/NoProjectSelectSelected";
import ProjectsSidebar from "./components/Sidebar";

function App() {
   
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
   });

   function handleStartAddProject(){
   setProjectsState( (prevState) => {
    return {
      ...prevState,
      selectedProjectId:null
    }
   })
   }

   function handleCancelAddProject(){
    setProjectsState( (prevState)=>{
      return{
        ...prevState,
        selectedProjectId:undefined
      }
    }
    )
   }



   
 function handleAddProject(projectData){ //onAdd data will be received here as an arguement

  //pulling  project data from the input field 
  setProjectsState(prevState=>{
    const newProject = {
      // title: ;
      // description:,     =====> projectdata
      // dueDate:
      ...projectData,
      id: Math.random()
    }

    return{
      ...prevState,
      selectedProjectId:undefined,
      projects: [...prevState.projects, newProject] //data population in projects array
    }
  }) 
  
}

console.log(projectsState)

   let content;

   if(projectsState.selectedProjectId===null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
   }else if(projectsState.selectedProjectId=== undefined){
    content = <NoProjectSelectSelected onStartAddProject={handleStartAddProject}/>
   }

  return (
    <main className="h-screen my-8 flex gap-8">
    <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
      {content}
    </main>
  );
}

export default App;
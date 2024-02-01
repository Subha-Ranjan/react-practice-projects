import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelectSelected from "./components/NoProjectSelectSelected";
import ProjectsSidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
   
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
   });

   function handleAddTask(data){
    setProjectsState((prev)=>{
      const taskId = Math.random();
      const newTask = {
        text: data,
        projectId: prev.selectedProjectId,
        id: taskId
      }

      return{
        ...prev,
        // selectedProjectId: undefined,
        tasks: [...prev.tasks, newTask]
      }
    })
   }
   function handleDeleteTask(id){
    setProjectsState( (prevState) => {
      return {
        ...prevState,
        tasks: projectsState.tasks.filter(
          (task)=> task.id !== id        )
      }
     })
   }



   function handleDeleteProject(id){
    setProjectsState( (prevState) => {
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects: projectsState.projects.filter(
          (project)=> project.id !== prevState.selectedProjectId
        )
      }
     })
   }


   function handleSelectProject(id){
    setProjectsState( (prevState) => {
      return {
        ...prevState,
        selectedProjectId:id
      }
     })
   }
   

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
const selectedProject = projectsState.projects.find(project=>project.id===projectsState.selectedProjectId);
console.log("Slected:",selectedProject)

   let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/>;

   if(projectsState.selectedProjectId===null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
   }else if(projectsState.selectedProjectId=== undefined){
    content = <NoProjectSelectSelected onStartAddProject={handleStartAddProject}/>
   }
   console.log("projectsState:",projectsState)
  return (
    <main className="h-screen my-8 flex gap-8">
    <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectsState.selectedProjectId}/>
      {content}

      
    </main>
  );
}

export default App;
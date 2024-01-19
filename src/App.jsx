import NewProject from "./components/NewProject";
import NoProjectSelectSelected from "./components/NoProjectSelectSelected";
import ProjectsSidebar from "./components/Sidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
    <ProjectsSidebar/>
    <NewProject/>
    <NoProjectSelectSelected/>
    </main>
  );
}

export default App;

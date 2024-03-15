import "./App.css"
import {Routes, Route} from "react-router-dom"
import Project from "./Pages/Project";
import ProjectDetail from "./Pages/ProjectDetail"

export default function App() {
  return (
  
    <Routes>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/projectDetail:id" element={<ProjectDetail/>} />
    </Routes>
  );
}
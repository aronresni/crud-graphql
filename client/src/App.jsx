import "App.css"
import {Routes, Route} from "react-router-dom"
import Project from "./Pages/Project";


export default function App() {
  return (
  
    <Routes>
      <Route path="/projects" element={<Project/>}/>
    </Routes>
  );
}
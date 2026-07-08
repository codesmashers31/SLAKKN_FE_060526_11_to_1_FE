import { Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contect from "./components/Contect"
import Project from "./components/Project"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <>
  
<Navbar/>
    <Routes>
      
      <Route path="/" element={<Home/>}  />
      <Route path="/about" element={<About/>}  />
      <Route path="/contact" element={<Contect/>}  />
      <Route path="/project" element={<Project/>}  />
    </Routes>
      
    </>
  )
}

export default App
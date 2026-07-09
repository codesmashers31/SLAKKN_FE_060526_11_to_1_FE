import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import StringRendering from './pages/StringRendering'
import NumberRendering from './pages/NumberRendering'
import BooleanRendering from './pages/BooleanRendering'
import Null_Undefind from './pages/Null_Undefind'
const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/string" element={<StringRendering/>}/>
      <Route path="/number" element={<NumberRendering/>}/>
      <Route path="/boolean" element={<BooleanRendering/>}/>
      <Route path="/null" element={<Null_Undefind/>}/>
    </Routes>
    </>
  )
}

export default App
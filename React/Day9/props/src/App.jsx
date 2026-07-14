import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Banner from "./pages/Banner"
import Home from "./pages/Home"
import Products from "./components/Products"
import Carts from "./components/Carts"


const App = () => {
  return (
   <>

    

     <NavBar/>

     <Routes>
       <Route path="/" element={<Products/>} />
       <Route path="/banner" element={<Carts/>} />
     </Routes>

     

   </>
  )
}

export default App

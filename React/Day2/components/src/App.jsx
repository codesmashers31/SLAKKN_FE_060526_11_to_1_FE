import data from "./dummay"
import Intro from "./Intro"

const App = ()=>{


  console.log(data(10,2));


  

   return (
     
    <>
    
    <h1>This is the React</h1>
    <Navbar/>
    <Intro/>
    </>

   )

}

export default App



export const Navbar = ()=>{


      return (<>
        <h1>This is the process</h1>
      </>)


}
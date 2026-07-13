import Datas from "./components/Datas"


const App = () => {

const obj=[
  {
  ename:"React",erole:"Developer",estatus:"Active"
},{
  ename:"Node" , erole : "tester" , estatus: "Active"
},
{
  ename:"Halim",erole:"student",estatus:"Active "
}]
  return (
    <>
   <Datas datas= {obj} /> 
    </>
  )
}

export default App
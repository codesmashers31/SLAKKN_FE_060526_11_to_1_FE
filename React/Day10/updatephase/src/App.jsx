import { useState } from "react"


const App = () => {

  // console.log('Components Running');
  
  
  const [count,setCount] = useState(true)
 
   
 const handleclick = ()=>{

  setCount(!count)

 }

  return (
    <>
    <p>{count?<p>This is True</p>:<p>This is False</p>}</p>
    <button onClick={handleclick}>Click to change</button>
    
    {count && <div>
     <h1>Tis is Datas</h1>
    </div>}
   
    
    </>
  )
}

export default App






































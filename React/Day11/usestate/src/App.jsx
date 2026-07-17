// import { useState } from "react"

import { useState } from "react"


// const App = () => {

  
//   const [number,setNumber] = useState(true)

  

//   const handleClick = ()=>{
//        setNumber(!number)
//   }

//   return (
//     <>
//     <p>{number}</p>
//     {number?<p className={number?"bg-red-300":"bg-white"}>This is Ture</p>:<h1>This false</h1>}
//     <button onClick={handleClick}>{number?"Light":"Dark"}</button>
    
//     {number && <h1>This Optional true</h1>}
//     </>
//   )
// }

// export default App





const App = () => {

  const [datas,setDatas] = useState([1,2,3,4,5])
  
  const [obj,setObj] = useState({name:"React"})
  
  const [objarr,setObjArr] = useState([
    {name:"React"},{name:"React 1"},{name:"React 2"}
  
  ])

  const handleClick = ()=>{

    console.log();
    
    setDatas([...datas,100])



  }

  const objClick = ()=>{

    // const copy = {...obj}

    setObj({...obj,name:"Node"})

  }


    const objArrClick = ()=>{

    // const copy = {...obj}

    const saveData = [...objarr]

    //console.log(saveData);
      
    const split = saveData.find((e,i)=>i===0?[...e]:e)
    
    console.log(split);
    
     
    setObjArr([...split,2])

  }

  return (
    <>
    <p>{datas}</p>
    <button onClick={handleClick}>On Click</button>
    <div>
     {datas.map((e,i)=>(
      <div key={i+1}>
       
       <h1>{e}</h1>

      </div>
     ))}
    </div>


    <div>
      <h1>{obj.name}</h1>
      <button onClick={objClick}>Obj Click</button>
    </div>'
    
    
    
    <div>
      <button onClick={objArrClick}>objArrClick</button>
    </div>


    <div>
      {objarr.map((e,i)=>(
        <div>
          <p>{e.name}</p>
        </div>
      ))}
    </div>
    

    </>
  )
}

export default App


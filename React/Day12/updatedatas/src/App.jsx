// import { useState } from "react"

import { useState } from "react"
import Button from "./Button"


// const App = () => {
 
//   const [obj,setObj] = useState({name:"React",subject:false})

//   const handelClick = ()=>{

//     setObj({...obj,name:"Node",subject:true})

//   }

//   return (
//     <>
//     <h1>{obj.name}</h1>
//     {obj.subject?<p>{obj.name}</p>:obj.name}

//     <button onClick={handelClick}>Update</button>
//     </>
//   )
// }

// export default App




// const App = () => {
  
//   const [arr,setArr] = useState(["Vijai","Ajith","Dhanush"])

//   const handelClick = ()=>{
    
//     const datas = [...arr]
          
//     datas.push("New datas")
//     setArr(
//       datas
//     )

//   }

//   return (
//     <>
//     {arr.join("-")}
//     <button onClick={handelClick}>Update</button>

//    <div>
//     {arr.map((e,i)=>(
//       <>
//       <div key={i+1}>
//         <h1 >{e}</h1>
      
//       </div>
//       </>
//     ))}
//    </div>

//     </>
//   )
// }

// export default App






// const App = () => {
 
//   const [arrobj,setArrObj] = useState([
    
//     {name:"React",subject:"Js"},
//     {name:"Python",subject:"py"},
//     {name:"Java",subject:"Ja"},
  
//   ])

//   const arrobjUpdate = ()=>{
     
//      const datas = arrobj.map((e,i)=>i === 1?{...e,name:"JS"}:e)

//      const data = arrobj.map((e,i)=>{

//             if(i===0){
//               return {...e, name:"Vijai"}
//             }


//             return e


//      })
     
//      setArrObj(data)


//   }

//   return (
//     <>
//     <div>
//       {arrobj.map((o,y)=>(
//         <div key={y+1}>
//           <p>{o.name}</p>
//           <p>{o.subject}</p>
//         </div>
//       ))}
//     </div>
    
//     <Button  updateDatas = {arrobjUpdate}   />
    
//     </>
//   )
// }

// export default App
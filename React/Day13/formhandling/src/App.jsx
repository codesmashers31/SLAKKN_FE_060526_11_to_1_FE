// import { useState } from "react";


// const App = () => {

//  const [userName,setUserName] = useState("")
//  const [saveData,setSaveData] = useState([])

//   const handleChange = (e)=>{

//     //console.log('data',e.target.value);
//     setUserName(e.target.value)

    

//   }


//   const handleClick = ()=>{

//     const name = {
//       id:Date.now(),
//       userName:userName
//     }

//     console.log(name);
    

//    const datas = [...saveData]

//    datas.push(name)

//     setSaveData(datas)
//     setUserName("")
    
//   }



//   return (
//     <>
//     {/* <p>{userName}</p> */}
    
//     <input type="text" value={userName} placeholder="Enter the Name" onChange={handleChange} />
//     <button onClick={handleClick}>Add Data</button>
  
//    {/* <h1>{saveData}</h1> */}
//   <div>
//     {saveData.map((e)=>(
//       <div key={e.id}>
//         <h2>{e.userName}</h2>
//       </div>
//     ))}
//   </div>
//     </>
//   )
// }

// export default App









// const App = () => {
//   return (
//     <>
//     input
//     onChange
//     save the data to useState

//     button add => onclick = >
//     click - useState [] - data show

//     username - empty
//     </>
//   )
// }

// export default App
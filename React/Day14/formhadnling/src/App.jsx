// import { useState } from "react";

import { useEffect, useState } from "react"


// const App = () => {

//   const [formdatas,setFormDatas] = useState({username:"",useremail:"",userpassword:""})
//   const [saveData,setSaveData] = useState([])
//  const handleChange = (e)=>{

//   // console.log(e.target.value);

//   // console.log(e.target.name);

//   //console.log(`Name:${e.target.name} --- Value : ${e.target.value}`);
  
//   setFormDatas({...formdatas,[e.target.name]:e.target.value})
  
//    //console.log(formdatas);
   


//  }

//  const handleSubmit = (e)=>{

//    e.preventDefault()
    
//    const datas = [...saveData]

//    datas.push(formdatas)
   
//     setSaveData(datas)

//     setFormDatas({username:"",useremail:"",userpassword:""})

//  }


//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={formdatas.username} placeholder='Enter the Name' name="username" onChange={handleChange} />
//       <input type="email" value={formdatas.useremail} placeholder='Enter the Email' name="useremail" onChange={handleChange} />
//       <input type="password" value={formdatas.userpassword} placeholder='Enter the Password'name="userpassword" onChange={handleChange} />
//       <input type="submit" value="Register" />
//     </form>

//     <div>

//       {saveData.map((e,i)=>(
//         <div key={i+1}>

//       <h1>{e.username}</h1>
//       <p>{e.useremail}</p>
//       <p>{e.userpassword}</p>
//         </div>
//       ))}

//     </div>
//     </>
//   )
// }

// export default App





// const App = () => {

//   const [data,setData] = useState("")

//   const [saveData,setSaveData] = useState("")
  
//   // const [EditId,setEditId] = useState(null)

//   const handelchange = (e)=>{

//     setData(e.target.value)

//   }


//   const handleSubmit = (e)=>{

//     e.preventDefault()
    
//     // const savedata = [...saveData]

//     // const userdata = {
//     //   id:Date.now(),
//     //   data
      

//     // }

//     // savedata.push(userdata)
     
//     setSaveData(data)

//     setData("")

//   }


//   // const handleEdit = (users,i)=>{

//   //   setData(users.data)
//   //   setEditId(users.id)

//   // }

//   return (

//     <>
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={data} placeholder="Enter the Task" onChange={handelchange} />
//       <input type="submit" value="Add" />
//     </form>
       

//       <h1>{saveData}</h1>
//     </>
    


//   )
// }

// export default App





const App = () => {
 

  console.log('Component Running');
  
  const [datas,setDatas] = useState(0)

  const handleData = ()=>{
  

   const datas = setInterval(()=>{
       setDatas((prev)=>prev+1)
    },1000)



  }

  useEffect(()=>{
    console.log('Effect Running');
    handleData()

    return clearInterval(datas)
  },[])

  return (
    <>
    <h1>{datas}</h1>
    
    </>
  )
}

export default App
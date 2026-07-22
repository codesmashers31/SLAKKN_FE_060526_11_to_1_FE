import { useEffect, useState } from "react"


const Register = () => {

    const [myData,setMydata] = useState({userName:"",userEmail:"",userPassword:""})
    const [saveData,setSaveData] = useState([])
  const handleChange = (e)=>{

    setMydata({...myData,[e.target.name]:e.target.value})

  }

  const handleSubmit = (e)=>{
  e.preventDefault()
    const mynewData = {
        id:Date.now(),
        myData
    }

  

    const checkData = JSON.parse(localStorage.getItem("myregister")) || []
     
    //console.log(checkData);
     
     

    checkData.push(mynewData)

    

    localStorage.setItem("myregister",JSON.stringify(checkData))

    alert('Succfully Done')

    setMydata({userName:"",userEmail:"",userPassword:""})

  }



  const takeData = ()=>{

     const getdata = localStorage.getItem("myregister")

     const changeData = JSON.parse(getdata)

     //console.log(changeData);
     
    
     setSaveData(changeData)


  }


useEffect(()=>{
    takeData()
},[])


const editData = (users,index)=>{

   
    console.log(users);


    setMydata(users)


}

  return (
    <>
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={myData.userName} placeholder="Enter the Name" name="userName" onChange={handleChange} />

            <input type="email" value={myData.userEmail} placeholder="Enter the email" name="userEmail" onChange={handleChange} />

            <input type="password" value={myData.userPassword} placeholder="Enter the password" name="userPassword" onChange={handleChange} />

            <input type="submit" value={"Register"}/>
        </form>
    </div>

    <div>
        {saveData.map((e,i)=>(
            <div key={e.id}>
                <h2>{e.myData.userName}</h2>
                <p>{e.myData.userEmail}</p>
                <button onClick={()=>editData(e.myData,i)}>Edit</button>
            </div>
        ))}
    </div>
    </>
  )
}

export default Register
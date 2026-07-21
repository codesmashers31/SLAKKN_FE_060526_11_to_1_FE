// import { useEffect, useState } from "react"

import { useEffect, useState } from "react"



// const App = () => {
// console.log('Compoennt running');

// const [datas,setDatas] = useState([])

// const [editid,setEditId] = useState(null)

//  const TakeData = async()=>{
//      console.log('Fetch FUnction RUnning');
     
//     const getData = await fetch("https://dummyjson.com/products")
//     const changeData = await getData.json()
     
//     //console.log(changeData.products);
//     setDatas(changeData.products)
   
//  }

// useEffect(()=>{
//   console.log('Effect Running')
//   TakeData()
// },[])


// const identify = (uuu)=>{
//     console.log('Function Running');
    
//   // console.log(uuu);
//   setEditId(uuu)
  

// }
  
//   return (
//     <>
 
//    <h1>{editid?"Running":"Not Running"}</h1>
//    <div>


//     {datas.map((e)=>(
//       <div key={e.id}>
//         <p>{e.title}</p>
//         <p>Rs - {e.price}</p>
//         <button onClick={()=>identify(e.id)}>Buy Now</button>
//       </div>
//     ))}
//    </div>
   
//     </>
//   )
// }

// export default App





// const App = () => {


//   const [time,setTime] = useState(0)


  

// useEffect(()=>{
// const getTime = ()=>{
      
//      setInterval(()=>{
//           //  count + 1
           
//           setTime((prev)=>prev+1)
           
//        },1000)

    

//   }

//   getTime()

// return clearInterval(time)
// },[])
  


//   return (
//     <>
//    <h1>{time}</h1>
//     </>
//   )
// }

// export default App








const App = () => {

const [number,setNumber] = useState(0)

  useEffect(()=>{


   const timer = setInterval(()=>{
       setNumber((p)=>p+1)
   },1000)
 
   return ()=> clearInterval(timer)

  },[])

  return (
   
    <>
    <h1>{number}</h1>
    </>
     
  )
}

export default App
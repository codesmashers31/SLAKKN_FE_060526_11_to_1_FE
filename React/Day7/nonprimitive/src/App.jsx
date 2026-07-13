

// const App = () => {

// const data = 80

// const isActive = true


// const datas = 10


//   return (
//     <>
//     <div>
//       <h1>{data}</h1>
//     </div>


//     <div className="bg-blue-500 text-white p-10">
//       {isActive?<p className="bg-green-500">This is True</p>:<p className="bg-red-500">This is False</p>}
//     </div>

//     <div className="bg-blue-500 text-white p-10">
//       {isActive && <p className="bg-green-500">This is True</p>}
//     </div>

//     <div>
//       {datas ?? <p>Tis is NOt null</p>}
//     </div>
//     </>
//   )
// }

// export default App






// const App = () => {

//   const arr = [1,2,3,4,5,6,]

//   return (
//     <>
//     <h1>{arr}</h1>
//     <div>
//       <ul>
//        {arr.map((e,i)=>(

//         <li key={i+1}>{e}</li>
        
//       ))}
//       </ul>
// {/* 
//       <p>
//         {arr.find((e)=>e%2===0)}
//       </p> */}
//     </div>
//     </>
//   )
// }

// export default App








// const App = () => {

//  const obj = {name:"React",subject:"Node",skills:{main:"html"}}

// //  const arr = []

// // //  arr.push(obj)

// //  const datas = [...arr,obj]

// //  console.log(datas);
 
//   return (
//     <>
//     <h2>{obj.name}</h2>
//     <p>{obj.subject}</p>
//     <p>{obj.skills.main}</p>
//     </>
//   )
// }

// export default App






const App = () => {

const datas = [
  {name:"React",subject:"Node"},
  {name:"HTML",subject:"JS"},
  {name:"Node",subject:"JS"}
]



  return (
    <>
    <div className="bg-amber-200 p-10 flex gap-20">
      {datas.map((e,i)=>(
          
          <div key={i+1} className="bg-blue-300 w-55 h-55 text-white">
            <p>{e.name}</p>
            <p>{e.subject}</p>
          </div>
          
      ))}
    </div>
    </>
  )
}

export default App
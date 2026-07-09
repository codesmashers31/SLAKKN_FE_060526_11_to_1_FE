import React from 'react'

const Null_Undefind = () => {
 
  let datas = undefined

 
  

  return (
    <>
    <div>
      <h1>Null & Undefind</h1>
      {/* {datas??"React"} */}

      <h1>{datas ??  "react"}</h1>
      
    </div>
    </>
  )
}

export default Null_Undefind
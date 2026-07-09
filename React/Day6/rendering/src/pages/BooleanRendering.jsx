import React from 'react'

const BooleanRendering = () => {
 
  const isActive = false
  const isNagative = true
  const login = "Login"
  

  


  return (
    <>
    <div>
      {isActive==="Null"?<p className='bg-blue-500 text-white'>{login}</p>:""}
      
      {/* <p>{isNagative}</p> */}
     
    </div>

 <br />
    <div>
     {/* {isNagative && <p className='bg-blue-500 text-white'>{login}</p>} */}
    </div>
    </>
  )
}

export default BooleanRendering
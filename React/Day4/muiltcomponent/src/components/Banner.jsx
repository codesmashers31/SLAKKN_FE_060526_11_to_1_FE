import React from 'react'
import logo from '../assets/banner.png'
import cardone from '../assets/3.png'
import cardtwo from '../assets/4.png'
const Banner = () => {
  return (
    <>
    <div>
      <img src={logo} />
    </div>
    </>
  )
}

export default Banner


export const CardsDisplay = ()=>{
 

    return (<>
    
    <div className='p-10'>
        <div className='p-10 bg-amber-300 h-100 flex gap-10 justify-center items-center'>
            <div className='w-50 h-85 bg-white p-2'>
                <img src={cardone} className='w-70 h-80' alt="" />
                            </div>
            <div className='w-50 h-85 bg-white p-2'>
                <img src={cardone} className='w-70 h-80' alt="" />
                            </div>
                            <div className='w-50 h-85 bg-white p-2'>
                <img src={cardone} className='w-70 h-80' alt="" />
                            </div>
                            <div className='w-50 h-85 bg-white p-2'>
                <img src={cardone} className='w-70 h-80' alt="" />
                            </div>
                            <div className='w-50 h-85 bg-white p-2'>
                <img src={cardone} className='w-70 h-80' alt="" />
                            </div>
                            <div className='w-50 h-85 bg-white p-2'>
                <img src={cardone} className='w-70 h-80' alt="" />
                            </div>
                            
        </div>
    </div>
      
    </>)


}
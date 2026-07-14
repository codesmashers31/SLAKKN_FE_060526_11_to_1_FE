import React from 'react'

const Banner = ({comapnydetails}) => {

  console.log(comapnydetails);
  
  return (
    <>
    <div className='bg-red-700 p-10 h-100 flex justify-center items-center'>
      <div className='bg-white text-black p-3 h-50 w-50'>
         <h2>{comapnydetails.companyName}</h2>
         <h2>{comapnydetails.course}</h2>
         <p>{comapnydetails.Batch}</p>
         <p>{comapnydetails.Hours}</p>
      </div>
    </div>
    </>
  )
}

export default Banner
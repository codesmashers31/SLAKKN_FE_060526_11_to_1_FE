import React from 'react'

const ProductListing = ({listing}) => {

    //console.log(listing);

    //const datas = [...listing]

    
    
  return (
    <>
   <div>
    {listing.map((e,i)=>(
        <p key={i+1}>{e.name}</p>
    ))}
   </div>
    </>
  )
}

export default ProductListing
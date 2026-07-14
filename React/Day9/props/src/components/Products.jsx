import React from 'react'
import Home from '../pages/Home'

const Products = () => {

   const arr = ["React","Node","Js","Python"]
   
   const arrobj = [
    
    {proName:"Iphone",proType:"Mobile",proPrice:2000},
    {proName:"Sumsung",proType:"Mobile",proPrice:3000},
    {proName:"HP",proType:"Laptop",proPrice:4000},
    {proName:"HCL",proType:"Company",proPrice:2}

]


  return (

    <Home  skills = {arr}  products = {arrobj}  />
    
  )
}

export default Products
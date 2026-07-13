const Datas = (p)=>{
   const {datas}   =p 
    return(<>
 {datas.map((react,i)=>(
           <h1 key={i}>{react.ename}</h1>
        ))}
    </>)
}

export default Datas


const Home = (develop) => {

   console.log(develop);

   const {products,skills} = develop

   console.log(products);
    console.log(skills);
   
   

  return (
   <>
    <div className="bg-blue-200 h-50 p-10 mx-15 flex justify-between">
        {skills.map((s,y)=>(
            <p className="bg-white text-balck p-2 rounded w-50" key={y+1}>{s}</p>
        ))}
    </div>

   <div className="flex justify-between p-10 h-100 mx-15 bg-amber-200 gap-17">
     {products.map((e,i)=>(
        <div key={i+1} className="bg-white p-3 h-50 w-50 ">
            <h2>{e.proName}</h2>
            <p>{e.proType}</p>
            <p>{e.proPrice}</p>
        </div>
     ))}
   </div>
   
   </>
  )
}

export default Home
import { Link } from "./Link"


const NavBar = () => {
  return (
    <>
    <div className="bg-blue-600 items-center p-5 flex justify-between text-white">
        <Logo/>
        <Link/>
    </div>
    
    </>
  )
}

export default NavBar



const Logo = ()=>{
    return (<>
    
    <div className="mx-10 bg-white w-25 text-black text-center h-15 flex justify-center items-center rounded-2xl">
        <p>Logo</p>
    </div>
    
    </>)
}

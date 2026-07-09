import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    <div className="bg-amber-300 flex justify-between p-2 items-center">
        <div className="mx-10">Logo</div>
        <div className="mx-10 p-3 flex gap-15">
            <Link to="/" >Home</Link>
            <Link to="/task" >Task</Link>
            <Link to="/project" >Project</Link>
            <Link to="/port" >portpolio</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar
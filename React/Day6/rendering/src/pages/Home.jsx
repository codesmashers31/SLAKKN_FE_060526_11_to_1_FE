import { Link } from "react-router-dom"


const Home = () => {
  return (
    <>
    <div className="p-10 bg-green-400 flex gap-10 justify-center items-center">
        <Link to="/string" className="bg-amber-200 p-2 rounded hover:bg-amber-50">String Rendering</Link>
        <Link to="/number" className="bg-amber-200 p-2 rounded hover:bg-amber-50">Number Rendering</Link>
        <Link to="/boolean" className="bg-amber-200 p-2 rounded hover:bg-amber-50">Boolean Rendering (Condition - Optional)</Link>
        <Link to="/null" className="bg-amber-200 p-2 rounded hover:bg-amber-50">Null & Undefind Rendering(Nullish col)</Link>
    </div>
    </>
  )
}

export default Home
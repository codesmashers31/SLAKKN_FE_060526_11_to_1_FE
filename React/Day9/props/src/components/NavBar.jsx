
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className='bg-amber-300 p-3 flex justify-between items-center'>
        <div className='mx-15'>
            Logo
        </div>
        <div className='mx-15 flex gap-15'>
            <Link to="/">Home</Link>
            <Link to="/banner">Banner</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar
import logos from '../assets/hero.png'

const Banner = () => {
  return (
    <>
    <div className='banner'>
        <img src="./images/favicon.svg" alt="" />
        <img src={logos}  />
    </div>
    
    </>
  )
}

export default Banner
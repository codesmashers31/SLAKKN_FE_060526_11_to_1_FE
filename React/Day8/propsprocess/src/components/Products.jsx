
import Orders from './Orders'
const Products = (props) => {

    //console.log(props);


const order = 2000
    
  return (
    <>
    <h1>{props.titleData}</h1>
    <Orders  amount = {order}  />
    <p>{props.list.name}</p>
    <p>{props.list.price}</p>
    </>
  )
}

export default Products
import DataListing from "./components/DataListing"
import Products from "./components/Products"


const App = () => {
 
  const title = "React"

  const productsList = {name:"react",price:2000}

  return (
    <>
    <DataListing/>
    <Products titleData = {title} list = {productsList}    />
    </>
  )
}

export default App

